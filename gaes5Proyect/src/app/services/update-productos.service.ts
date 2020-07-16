import { Injectable } from '@angular/core';
import { Observable,Subject} from 'rxjs';
import { UpdateProductosModels } from '../Models/model-update-products'

@Injectable({
  providedIn: 'root'
})
export class UpdateProductosService {

  private suscription = new Subject<any>();
  sendProduct(product:any){
    this.suscription.next(product);
  }
  getProduct(){
    return this.suscription.asObservable();
  }
}
