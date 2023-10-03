class Producto{
    static _contadorProductos = 0;
    constructor(nombre, precio){
        this._idProducto = ++Producto._contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }
    get getNombre(){
        return this._nombre;
    }
    set setNombre(nombre){
        this._nombre = nombre;
    }
    get getPrecio(){
        return this._precio;
    }
    set setPrecio(precio){
        this._precio = precio;
    }

    toString(){
        return `{Id: ${this._idProducto}, Nombre: ${this._nombre}, Precio: $${this._precio}}`;
    }
}
class Order{
    static _contadorOrders = 0;
    static get MAX_PRODUCT(){
        return 5;
    } 
    constructor(producto){
        this._idOrder = ++Order._contadorOrders;
        this._productos= [];
        this._contadorProtuctosAgregados = 0;
    }
    get idOrder(){
        return this._idOrder;
    }
    agregarProducto(producto){
        if(this._productos.length < Order.MAX_PRODUCT){
            this._productos.push(producto);
        }else return false;
    }

    calcularTotal(){
        let sumarPrecios = 0;
        for(let producto of this._productos){
            sumarPrecios += producto.getPrecio;
        }
        return sumarPrecios;
    }
    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this._productos){
            productosOrden += producto.toString() + ' ';
        }
        return `
        N°Orden:${this._idOrder}, Total: $${this.calcularTotal()}, Productos: ${productosOrden}`;
    }
}

let silla = new Producto("silla", 10);
let mesa = new Producto("mesa", 30);

let orden = new Order();
orden.agregarProducto(silla);
orden.agregarProducto(mesa);

console.log(orden.mostrarOrden());