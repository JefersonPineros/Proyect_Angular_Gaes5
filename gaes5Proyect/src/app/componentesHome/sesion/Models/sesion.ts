export class Sesion{
    public emailSesion: String;
    public contrasenaSesion: String;
    constuctor(
        email:String,
        contrasena:String
    ){
        this.emailSesion = email;
        this.contrasenaSesion = contrasena;
    }
    getEmail(){
        return this.emailSesion;
    }
    setEmail(email:String){
        this.emailSesion = email;
    }
    getPass(){
        return this.contrasenaSesion;
    }
    setPass(pass:String){
        this.contrasenaSesion = pass
    }
}
    
