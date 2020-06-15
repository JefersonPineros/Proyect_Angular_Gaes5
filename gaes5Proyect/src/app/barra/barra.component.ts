import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from '../services/login.service';
import * as Cookie from 'js-cookie';
declare var $: any;
@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {
  suscripcion:Subscription;
  public ingreso: boolean;
  public tipoUsuario: number;
  public usuario:string;
  private urlHome:string;
  
  private objAccess:Array<any>;
  constructor(private loginService:LoginService) { 
    this.urlHome = '/home'
  }
  ngOnInit(): void {
    let tipoCookie = Cookie.get('tipo');
    let userCookie = Cookie.get('usuario');
    let accesoCookie = Cookie.get('acceso');
    if(userCookie != undefined){
      if(accesoCookie == 'true'){
        this.ingreso = true;
      }
      this.tipoUsuario = parseInt(tipoCookie);
      this.usuario = userCookie; 
    }else{
        this.ingreso = false;
        this.tipoUsuario = null;
        this.usuario = null;
    }
    
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      e.target // newly activated tab
      e.relatedTarget // previous active tab
    })
    this.suscripcion=this.loginService.getLogin().subscribe(
      validacion => {
        this.objAccess = validacion;
        this.ingreso = this.objAccess[0].acceso;
        this.tipoUsuario = this.objAccess[0].tipo;
        this.usuario = this.objAccess[0].user;
        console.log(this.ingreso)
        console.log(this.tipoUsuario)
      }
    )
  }
  clearSesion(){
    this.loginService.clearLogin()
    Cookie.remove('tipo');
    Cookie.remove('usuario');
    Cookie.remove('acceso');
    location.reload();
    location.replace(this.urlHome)
  }
}
