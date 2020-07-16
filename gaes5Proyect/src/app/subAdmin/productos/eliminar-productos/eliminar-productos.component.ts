import { Component, OnInit } from '@angular/core';
import { UpdateProductosService } from '../../../services/update-productos.service'
@Component({
  selector: 'app-eliminar-productos',
  templateUrl: './eliminar-productos.component.html',
  styleUrls: ['./eliminar-productos.component.css']
})
export class EliminarProductosComponent implements OnInit {
  public listaProductos: Array<any>;
  constructor(private updateProductos:UpdateProductosService) { 
    this.listaProductos = [
      {
        id_producto:"1",
        nombre_producto:"Aguila",
        codigo_producto:"445611",
        estado_producto:"1",
        cantidad_producto:"25",
        valor_iva:"2700",
        descripcion_productos:"Cerveza",
        tipo_producto:"Cervezas"
      },{
        id_producto:"2",
        nombre_producto:"Poker",
        codigo_producto:"778996",
        estado_producto:"1",
        cantidad_producto:"52",
        valor_iva:"2500",
        descripcion_productos:"Cerveza barata",
        tipo_producto:"Cervezas"
      },{
        id_producto:"3",
        nombre_producto:"Club Colombia",
        codigo_producto:"445855",
        estado_producto:"1",
        cantidad_producto:"25",
        valor_iva:"3500",
        descripcion_productos:"Cerveza cara",
        tipo_producto:"Cervezas"
      },{
        id_producto:"4",
        nombre_producto:"Costeña",
        codigo_producto:"78996654",
        estado_producto:"0",
        cantidad_producto:"25",
        valor_iva:"2200",
        descripcion_productos:"Cerveza de costeños",
        tipo_producto:"Cerveza"
      }
    ]
  }

  ngOnInit(): void {
  }

  actualizarProducto(item:number){
    for(let i = 0; i <= this.listaProductos.length; i++){
      if(i == item){
        this.updateProductos.sendProduct(this.listaProductos[i])
      }
    }
  }
  eliminarProducto(item:number){
    console.log("Eliminar producto",item)
  }

}
