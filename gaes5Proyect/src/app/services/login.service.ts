import { Injectable } from '@angular/core';
import { Observable,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private subject = new Subject<any>();
  
  sendLogin(acceso:Array<any>){
    this.subject.next(acceso);
  }
  getLogin():Observable<any>{
    
    return this.subject.asObservable();
  }
  clearLogin(){
    this.subject.next()
  }

}
