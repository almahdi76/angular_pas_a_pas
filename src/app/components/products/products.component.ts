import { Component,OnInit } from '@angular/core';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';
import { AppDataState, DataStateEnum } from 'src/app/state/product.state';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // productList!:Product[];
   /* productList$!:Observable<Product[]> */
   productList$:Observable<AppDataState<Product[]>>| null=null;
    errorMs!:string;
  constructor(private productService:ProductService){

   }
  ngOnInit(): void {
   
  }
  allProducts(){
    this.productList$=this.productService.getAllProduit().pipe(
      map(data=>({datastat:DataStateEnum.LOADED,data:data})),
      startWith({datastat:DataStateEnum.LOADING}),
      catchError(err=>of({datastat:DataStateEnum.ERROR,errorMessage:err.message}))

    )
  }

/*   allProducts(){
    this.productList$=this.productService.getAllProduit();
  } */
/* 
  selectedProducts(){
    this.productList$=this.productService.getSelectedProduit();

  }

  avalableProducts(){
    this.productList$=this.productService.getAvalabledProduit();
  } */

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
