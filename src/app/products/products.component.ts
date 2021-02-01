import { Component, OnInit } from '@angular/core';
import { ApiproductsService } from '../apiproducts.service';
import { Products } from 'src/products';
import { MatTableDataSource } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button'; 
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  ELEMENT_DATA : Products[];
  displayedColumns: string[] = ['name', 'type', 'price', 'rating', 'warranty_years', 'available'];
  dataSource = new MatTableDataSource<Products>(this.ELEMENT_DATA);
 

  id: string;
  type: string;
  price: number;
  rating: number;
  warranty_years: string;
  available: boolean;

  constructor(private service:ApiproductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  public getProducts(){
    let res = this.service.products();
    res.subscribe(product=>this.dataSource.data=product as Products[]);
  }

  public updateProduct(id:string,type:string,price:number,rating:number,warranty_years:string,available:boolean){
    this.id = id;
    let res = this.service.updateProduct(id,type,price,rating,warranty_years,available);
    res.subscribe(product=>this.dataSource.data=product as Products[])
  }

  public deleteProduct(id:string,type:string,price:number,rating:number,warranty_years:string,available:boolean){
    this.id = id;
  }

}
