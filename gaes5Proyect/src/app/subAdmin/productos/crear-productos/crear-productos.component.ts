import { Component, OnInit } from '@angular/core';
import { NgForm,FormGroup, FormControl } from '@angular/forms';
import { CreateProduct } from '../../../Models/model-create-productos';

@Component({
  selector: 'app-crear-productos',
  templateUrl: './crear-productos.component.html',
  styleUrls: ['./crear-productos.component.css']
})
export class CrearProductosComponent implements OnInit {
  public createProduct: CreateProduct;
  public tipoProduct:any[];
  constructor() { 
    this.createProduct = new CreateProduct("","",null,null,"","","",null);
    this.tipoProduct = [
      {id:"1",tipo:"Comidas"},
      {id:"2",tipo:"Coctel"},
      {id:"3",tipo:"Cervezas"},
      {id:"4",tipo:"Whysky"}
    ];
  }

  ngOnInit(): void {
  }
  onSubmit(){
     console.log(this.createProduct);
  }
}
