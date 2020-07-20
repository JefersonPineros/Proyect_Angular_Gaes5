import { Injectable } from '@angular/core';
import { Observable,Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PedidosCarritoService {
  
  private subject = new Subject<any>();
  sendProducto(producto:any){
    this.subject.next(producto);
  }
  getProduct(){
    return this.subject.asObservable();
  }
}
