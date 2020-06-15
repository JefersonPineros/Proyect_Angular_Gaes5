import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms'

@Component({
  selector: 'app-ini-sesion-product',
  templateUrl: './ini-sesion-product.component.html',
  styleUrls: ['./ini-sesion-product.component.css']
})
export class IniSesionProductComponent implements OnInit {
  
  public userEmail:string;
  public userPass:string;
  public init: Array<any>;
  constructor() { 
    this.userEmail="";
    this.userPass="";
  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.init= [{emailUser:this.userEmail,passUser:this.userPass}];
    console.log(this.init);
  }

}
