//Uso de Objetos
//Manera recomendada de crear objetos
let persona= {
    nombre: "Michael",
    apellido: "Ponce",
    edad: 21,
    nombreCompleto: function (){
        return this.nombre +" "+this.apellido
    }
}

//Manera no recomendada
let persona2 = new Object();
persona2.nombre= "Maicol";
persona2.apellido= "Ponce";
persona2.edad= "21";

console.log(persona.nombreCompleto());

//Utilizando el metodo del objeto persona en persona2
console.log(persona.nombreCompleto.call(persona2));

//Get and Set
let Auto = {
    nombre : "Audi",
    modelo: "A8",
    anio : 2023,

    get nombreCompleto(){
        return this.nombre + " "+ this.modelo + " " + this.anio;
    },

    set modificarNombre(nombre){
        this.nombre = nombre;     
    } 
}

console.log(Auto.nombreCompleto);
Auto.modificarNombre = "Ferrari";
console.log(Auto.nombreCompleto);

//Contructor
function Automovil(nombre, modelo, anio, color){
    this.nombre = nombre;
    this.modelo = modelo;
    this.anio = anio;
    this.color = color;
}

let autoFerrari = new Automovil("Ferrari", "Italy", "2023", "rojo");
console.log(autoFerrari);