import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1vY3RhciIsInBhc3N3b3JkIjoidGVzdCIsImlhdCI6MTYxMjEyMjI5NH0.OSDnGYjCbyBW7fqidkrAxNKmzdhLW-iODdoLhEQQrKQ'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiproductsService {

  id: string;
  type: string;
  price: number;
  rating: number;
  warranty_years: string;
  available: boolean;


  constructor(private http:HttpClient) { }

  products(){
    return this.http.get("http://localhost:3000/products",httpOptions) 
  }

  newProduct(id:string,type:string,price:number,rating:number,warranty_years:string,available:boolean){
    const data= { type: this.type, price: this.price, rating: this.rating, warranty_years: this.warranty_years, available: this.available};
    return this.http.post("http://localhost:3000/products/new",data,httpOptions) 
  }

  updateProduct(id:string,type:string,price:number,rating:number,warranty_years:string,available:boolean){
    const data= { type: this.type, price: this.price, rating: this.rating, warranty_years: this.warranty_years, available: this.available};
    return this.http.put("http://localhost:3000/products/"+id,data,httpOptions)
  }

  deleteProduct(id:string,type:string,price:number,rating:number,warranty_years:string,available:boolean){
    const data= { type: this.type, price: this.price, rating: this.rating, warranty_years: this.warranty_years, available: this.available};
    return this.http.delete("http://localhost:3000/products/"+id,httpOptions)
  }


}
