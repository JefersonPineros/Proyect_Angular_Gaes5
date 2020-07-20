import { Component, OnInit } from '@angular/core';
import { PedidosCarritoService } from '../../services/pedidos-carrito.service'
import { newArray } from '@angular/compiler/src/util';
@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {
  public pedidos: Array<any>;
  constructor(private getPedido: PedidosCarritoService) { 
    this.pedidos = new  Array()
  }

  ngOnInit(): void {
    this.getPedido.getProduct().subscribe(
      product =>{
        if(product != ""){  
          this.pedidos = product
          console.log(this.pedidos)
        }
      }
    )
  }
  
}
