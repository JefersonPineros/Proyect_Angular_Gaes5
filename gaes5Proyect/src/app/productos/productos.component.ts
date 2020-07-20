import { Component, OnInit } from '@angular/core';
import { PedidosCarritoService } from '../services/pedidos-carrito.service'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  public countPedidos: string;
  public listaProductos: Array<any>;
  public ProduuctosSeleccionados: Array<any>;
  constructor(private sendProductoServices: PedidosCarritoService) {
    this.ProduuctosSeleccionados = new Array()
    this.countPedidos = "0";
    this.listaProductos = [
      { idProducto: 1, nombrePro: "Aguila light", descripcionPro: " Es una cerveza muy refrescante, con un sabor suave y menos porcentaje de alcohol...", valorProdu: 2500, imagen: "../../assets/imagenes/productos/aguilaLight.jpeg" },
      { idProducto: 2, nombrePro: "Poker", descripcionPro: "Está elaborada por la Cervecería Bavaria, sin duda la más importante de Colombia...", valorProdu: 2500, imagen: "../../assets/imagenes/productos/poker.jpg" },
      { idProducto: 3, nombrePro: "Costeña", descripcionPro: "Con la promesa de ser una cerveza con un único y característico sabor seco y amargo. Ofrece a ...", valorProdu: 2800, imagen: "../../assets/imagenes/productos/costeña.jpg" },
      { idProducto: 4, nombrePro: "Club Colombia - Golden", descripcionPro: " Esta Club Colombia tiene el color dorado de las cervezas elaboradas con cebada malteada y malta caramelo...", valorProdu: 2800, imagen: "../../assets/imagenes/productos/clubDorada.jpg" },
      { idProducto: 5, nombrePro: "Club Colombia - Red", descripcionPro: " Esta Club Colombia tiene el color dorado de las cervezas elaboradas con cebada malteada y malta caramelo.", valorProdu: 2800, imagen: "../../assets/imagenes/productos/clubRoja.jpg" },
      { idProducto: 6, nombrePro: "Heineken", descripcionPro: " La familia Heineken entró al negocio de la cerveza y comenzaron a fermentarla en tanques horizontales...", valorProdu: 3500, imagen: "../../assets/imagenes/productos/heineken.jpg" },
      { idProducto: 7, nombrePro: "Budweicer", descripcionPro: "Budweiser (Anheuser-Busch) es una cerveza de origen checa, patentada en los Estados Unidos y una de las más populares en dicho país.", valorProdu: 3000, imagen: "../../assets/imagenes/productos/budweiser.jpg" },
      { idProducto: 8, nombrePro: "Jack Daniels", descripcionPro: "Una de las botellas más vendidas de la destilería Jack Daniel, la mashbill está compuesta por 80% de maíz..", valorProdu: 120000, imagen: "../../assets/imagenes/productos/jackDaniels.jpg" },
      { idProducto: 9, nombrePro: "Something special", descripcionPro: "Su sabor es suave, tiene notas de malta dulce y chocolate amargo, con un final seco y sensaciones de humo, cuero y especias.", valorProdu: 180000, imagen: "../../assets/imagenes/productos/something.png" },
      { idProducto: 10, nombrePro: "Margarita", descripcionPro: "Trituramos el limón, la lima, las naranjas y la piña. Si lo hacemos con la Thermomix, ponemos estos...", valorProdu: 15000, imagen: "../../assets/imagenes/productos/margarita.jpg" },
      { idProducto: 11, nombrePro: "Limonada Turca", descripcionPro: "Elaboración: Para hacer esta peculiar y refrescante limonada turca, comenzamos exprimiendo...", valorProdu: 35000, imagen: "../../assets/imagenes/productos/limonada.jpg" }
    ]
  }

  ngOnInit(): void {
  }
  agregarProducto(idPro: string) {
    let idPr: string = idPro;
    let contador: number = parseInt(this.countPedidos);

    if (this.ProduuctosSeleccionados.length > 0) {
      if(this.ProduuctosSeleccionados.find(x => x.idProducto == idPr)){
        console.log("Producto ya seleccionado");
      }else{
        for(let x = 0; x < this.listaProductos.length; x ++){
          if (this.listaProductos[x].idProducto == idPr) {
            contador = contador + 1;
            this.countPedidos = contador.toString();
            this.ProduuctosSeleccionados.push(this.listaProductos[x]);
            console.log(this.ProduuctosSeleccionados);
          }
        }
      }
    } else {
      for (let i = 0; i < this.listaProductos.length; i++) {
        if (this.listaProductos[i].idProducto == idPr) {
          contador = contador + 1;
          this.countPedidos = contador.toString();
          this.ProduuctosSeleccionados.push(this.listaProductos[i]);
        }
      }
    }
  }
  sendProductos() {
    this.sendProductoServices.sendProducto(this.ProduuctosSeleccionados);
  }
}
