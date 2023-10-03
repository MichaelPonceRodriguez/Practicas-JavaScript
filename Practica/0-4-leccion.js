//Creacion de la clase Persona
class Persona {;
    //Contructor de la Clase Persona
    constructor (nombre, apellido, edad, sexo) {
        this._nombre = nombre;
        this._apellido= apellido;
        this._edad = edad;
        this._sexo = sexo;
    }
    //Metodo mostrar nombre completo
    nombreCompleto() {
        return this._nombre + " " + this._apellido+ " "+ this._edad+" "+ this._sexo;
    }
    
//Getters and Setters
    set nombre(nombre){
        this._nombre = nombre;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    set edad(edad){
        this._edad = edad;
    }
    set sexo(sexo){
        this._sexo = sexo;
    }
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    get edad(){
        return this._edad;
    }
    get sexo(){
        return this._sexo;
    }
}

let michael = new Persona("michael", "ponce", 21, "Masculino");
console.log(michael.nombreCompleto());
michael.apellido = "Ponce Rodriguez";
console.log(michael.nombreCompleto());
michael.nombre = "Michael Angelo";
console.log(michael.nombreCompleto());