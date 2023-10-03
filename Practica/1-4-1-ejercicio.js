class Persona{
    static contadorPersonas = 0;
    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    static get idPersona(){
        return this.contadorPersonas;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this.apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    get edad(){
        return this.edad;
    }
    set edad (edad){
        this._edad = edad;
    }

    toString(id){
        return "Id: "+id+ " Nombre: " + this._nombre+ " Apellido: "+this._apellido+ " Edad: "+this._edad;
    }
}

class Empleado extends Persona{
    static contadorEmpleado = 0;
    constructor(nombre, apellido,edad, sueldo){
        super(nombre,apellido,edad);
        this._idEmpleado = ++Empleado.contadorEmpleado;
        this._sueldo= sueldo;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo (sueldo){
        this._sueldo = sueldo;
    }
    toString(){
        return super.toString(this._idEmpleado) + " Sueldo: "+ this._sueldo;
    }
}

class Cliente extends Persona{
    static contadorCliente = 0;
    constructor(nombre,apellido,edad){
        super(nombre,apellido,edad);
        this._registro = new Date();
        this._idCliente = ++Cliente.contadorCliente;
    }

    get idCliente(){
        return this._idCliente;
    }
    get fecha(){
        return this._registro;
    }
    set fecha(fecha){
        this._registro = fecha;
    }

    toString(){
        return super.toString(this.idCliente) + " fecha: " + this._registro;
    }
}


let michael = new Empleado("Michael", "Ponce", 21, 100);
let manuel = new Empleado("Manuel", "Perez", 22, 200);
let miguel = new Cliente("Miguel", "Fernandez", 32);

console.log(Persona.contadorPersonas);
console.log(michael.toString());
console.log(manuel.toString());
console.log(miguel.toString());