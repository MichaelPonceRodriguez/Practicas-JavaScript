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