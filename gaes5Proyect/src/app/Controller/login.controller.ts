import { Sesion } from '../componentesHome/sesion/Models/sesion';
import { SimplePlaceholderMapper } from '@angular/compiler/src/i18n/serializers/serializer';
import { mapHash } from '@fullcalendar/core';

export class LoginController{

    private userArray: Sesion;
    private temp:Array<any>;
    private acceso:Array<any>;
    constructor(){
        this.userArray = new Sesion;
        this.temp = [
            {email:"japineros91@misena.edu.co",pass:"123456", type:1},
            {email:"rubyRomero84@gmail.com",pass:"789456",type:2},
            {email:"wgaitan7@misena.edu.co",pass:"456123",type:3}
    ]
    }
    public sesion:Sesion;
    comprobarUser(values:Sesion){

        let user;
        let email;
        let contraseña;
        let lista:Array<any>= [values]
        
        lista.forEach(item=>{
            email = item.emailSesion;
            contraseña = item.contrasenaSesion;
        })

        user = this.temp.find(item => item.email == email);
        if(user != undefined){
            if(user.email == email && user.pass == contraseña){
                this.acceso = [{tipo:user.type,acceso: true,user:email}]
                return this.acceso;
            }else{
                this.acceso = [{tipo:null,acceso:false,user:null}]
                return this.acceso
            }    
        }else{
            this.acceso = [{tipo:null,acceso:false,user:null}]
                return this.acceso
        }   
        
        
    }

}