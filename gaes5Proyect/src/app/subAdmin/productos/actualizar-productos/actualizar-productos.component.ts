import { Component, OnInit } from '@angular/core';
import { UpdateProductosService } from '../../../services/update-productos.service'
import { UpdateProductosModels } from '../../../Models/model-update-products'
@Component({
  selector: 'app-actualizar-productos',
  templateUrl: './actualizar-productos.component.html',
  styleUrls: ['./actualizar-productos.component.css']
})
export class ActualizarProductosComponent implements OnInit {
  public productoAc: UpdateProductosModels;
  public updateProductosModel : UpdateProductosModels;
  public x:number;
  public selected: boolean = false;
  public tipoProducto: Array<any>;
  constructor(private updateProducto:UpdateProductosService) { }

  ngOnInit(): void {
    this.updateProducto.getProduct().subscribe(
      producto => {
        if(producto != ''){
          this.productoAc = new UpdateProductosModels(
            producto.id_producto,
            producto.nombre_producto,
            producto.codigo_producto,
            producto.estado_producto,
            producto.cantidad_producto,
            producto.valor_iva,
            producto.descripcion_productos,
            producto.tipo_producto);
            this.selected = true;
        }
    })
    this.tipoProducto = [
      {id:"1",tipo:'Comidas'},
      {id:"2",tipo:'Coctel'},
      {id:"3",tipo:'Cervezas'},
      {id:"4",tipo:'Whykys'}
    ];
  }
  actualizarProducto(){
    console.log(this.productoAc);    
  }
  
}
