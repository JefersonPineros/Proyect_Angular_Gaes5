export class CreateProduct{
    constructor(
        public nameProduct:string,
        public codigoProducto:string,
        public cantProduct:number,
        public netoProduct:number,
        public descriptionProduct:string,
        public tipoProduct:String,
        public nameProvider:string,
        public contacProvider:number
    ){

    }
}