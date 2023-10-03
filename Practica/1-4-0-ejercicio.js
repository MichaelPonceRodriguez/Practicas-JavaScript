//Aplicando Clases con Herencias
class Persona{
    static contadorDePersonas = 0;
    //Metodo Constructor
    constructor(nombre, apellido, edad, sexo){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._sexo = sexo;
        Persona.contadorDePersonas++;
    }
    //Metodo del nombre completo
    nombreCompleto(){
        return "Nombre: "+this._nombre + " Apellido: "+ this._apellido + " Edad: "+ this._edad+ " Sexo: "+ this._sexo;
    }

    //Getters and Setters
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
}

//Creacion de la clase Empleado
class Empleado extends Persona{
    static contadorDeEmpleados = 0; // Contador de Empleados registrados

    constructor(nombre, apellido, edad, sexo, puesto){
        super(nombre,apellido,edad,sexo);
        this._puesto=puesto;
        Empleado.contadorDeEmpleados++;
    }
    nombreCompleto(){
        return super.nombreCompleto() + " Puesto: "+ this._puesto;
    }

}

//Creacion de la clase Socio
class Socio extends Persona{
    static contadorDeSocios = 0;//Contador de Socios registrados

    constructor(nombre,apellido,edad,sexo){
        super(nombre,apellido,edad,sexo)
        Socio.contadorDeSocios++;
    }
}


let michael = new Empleado("Michael","Ponce",21,"M","Developer");
console.log(michael.nombreCompleto());

let miguel = new Socio("Miguel", "Fernandez", 33,"M");
console.log(miguel.nombreCompleto());


//Cantidad de Registros 
console.log(Persona.contadorDePersonas);
console.log(Empleado.contadorDeEmpleados);
console.log(Socio.contadorDeSocios);
