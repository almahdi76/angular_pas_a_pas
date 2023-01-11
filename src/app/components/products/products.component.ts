import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // productList!:Product[];
   productList!:Observable<Product[]>
    errorMs!:string;
  constructor(private productService:ProductService){

   }
  ngOnInit(): void {
   
  }

  allProducts(){
    this.productList=this.productService.getAllProduit();
  }

  selectedProducts(){
    this.productList=this.productService.getSelectedProduit();

  }

  avalableProducts(){
    this.productList=this.productService.getAvalabledProduit();
  }

 /*  allProducts(){
    this.productService.getAllProduit().subscribe({
      next:(data)=>{return this.productList=data},
      error:(err)=> {
        this.errorMs="cette service n'est pas accesible!!";
      } 
     })
  } */

/*   selectedProducts(){
    this.productService.getSelectedProduit().subscribe({
      next:(data)=>{return this.productList=data},
     })

  }

  avalableProducts(){
    this.productService.getAvalabledProduit().subscribe({
      next:(data)=>{return this.productList=data},
     })

  } */

}
