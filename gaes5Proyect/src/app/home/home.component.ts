import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import * as Cookie from 'js-cookie';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private sucripcion:any;
  private accessObject: Array<any>;
  public accesoValidado: boolean;
  constructor(private loginService: LoginService) {
    this.sucripcion = this.loginService.getLogin().subscribe(
      validacion =>{
      this.accessObject = validacion
      this. accesoValidado = this.accessObject[0].acceso;
    })
   }

  ngOnInit(): void {
    let accessCookie = Cookie.get('acceso');
    if(accessCookie != undefined){
      if(accessCookie == 'true'){
        this.accesoValidado = true;
      }else{
        this.accesoValidado = false;
      }
    }else{
      this.accesoValidado = false;
    }
  }

}
