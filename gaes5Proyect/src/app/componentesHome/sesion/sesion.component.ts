import { Component, OnInit } from '@angular/core';
import { FormsModule,NgForm, FormGroup } from '@angular/forms';
import { Sesion } from './Models/sesion';
import { NewUser } from "./Models/newUser";
import { LoginService } from '../../services/login.service';
import { LoginController } from '../../Controller/login.controller'
import * as Cookie from 'js-cookie';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {
  public sesion: Sesion;
  public newUser: NewUser;
  public loginController: LoginController;
  public validacion:boolean;
  private typeValidation: Array<any>;
  formSesion: FormGroup
  constructor(private loginState:LoginService) { 
    this.sesion = new Sesion();
    this.newUser = new NewUser("","","","","");      
    this.loginController = new LoginController(); 
    }

  ngOnInit(): void {
    // validacion de cookies guardadas
    let uG =  Cookie.get('usuario');
    let access = Cookie.get('acceso')
    let tipoAC = Cookie.get('tipo'); 
    if(uG != undefined){
      let accessConfirm;
      if(access == "true"){
        accessConfirm = true;
      }
      let tipoParce = parseInt(tipoAC);
      this.loginState.sendLogin([{tipo:tipoParce,acceso: accessConfirm,user:uG}])
    }   
    // if(this.validacion){
    //   this.loginState.sendLogin(this.typeValidation);
    // }else{
    //   this.loginState.sendLogin(this.typeValidation);
    // }
  }
  validationLogin(values:Array<any>):boolean{
    let acceso : Array<any> = values
    if(acceso[0].acceso = true){
       return true; 
    }else{
      return false;
    }
  }

  onSubmit(){
    this.typeValidation = this.loginController.comprobarUser(this.sesion);
    console.log(this.typeValidation);
    this.validacion = this.validationLogin(this.typeValidation);
    console.log(this.validacion);
    // validacion y actualización del estado
    this.loginState.sendLogin(this.typeValidation);
    if(this.validacion){
      let user;
      let tipoAc;
      let access;
      this.typeValidation.forEach((item) =>{
        user = item.user;
        access = item.acceso;
        tipoAc = item.tipo;
      });
      // guardar cookies
      //localStorage.setItem()
      Cookie.set('acceso',access)
      Cookie.set('usuario',user);
      Cookie.set('tipo',tipoAc)
    }
  }

  newUserSubmit(){

    Swal.fire({
      icon: 'success',
      title: 'Usuario almacenado correctamente',
      text: '¡Muchas gracias!, ahora inicia sesion. ',
    })

    console.log(this.newUser);

  }
    
  
}
