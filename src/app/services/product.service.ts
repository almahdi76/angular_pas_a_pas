import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  host:string="http://localhost:3000";
/*   getAllProduit(){
    return this.http.get(`${this.host}/products`)
  } */

  getAllProduit():Observable<Product[]>{

    return this.http.get<Product[]>(`${this.host}/products`)
  }

  getSelectedProduit():Observable<Product[]>{
   
    return this.http.get<Product[]>(`${this.host}/products?selected=true`);

      
  }

  getAvalabledProduit():Observable<Product[]>{

    return this.http.get<Product[]>(`${this.host}/products?avalible=true`)
  }


}
