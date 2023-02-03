import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url:string = 'https://fakestoreapi.com/products'
  constructor(private httpClient:HttpClient) { }

  getAllProducts(){
    return this.httpClient.get(this.url)
  }

  getSingleProduct(id:number){
    return this.httpClient.get(this.url+'/'+id)  //https://fakestoreapi.com/products/101
  }

}
