//Utilizando funciones con parametros

function sumar(a, b, c){
    return a + b + c + arguments[arguments.length-1];
}

function restar(a, b, c){
    return a - b - c;
}

//----------------------------------------------------------------------------------------------------------------

//Paso por valor funcion
let x = 10;
function cambioDeValor(z){
    z = 100;
    return z;
}
console.log(cambioDeValor(x));
console.log(x);


//----------------------------------------------------------------------------------------------------------------

//Utilizando funciones sin parametros
function sumarArguments(){
    let suma = 0;
    for(let i=0; i<arguments.length;i++){
        suma += arguments[i];
    }
    return suma;
}
//----------------------------------------------------------------------------------------------------------------

console.log(sumar(10,2,3,5,3,1,1,1,1,10));

console.log(restar(10,20,30));

console.log(sumarArguments(1,2,3,4,5,6,7,8,9,10));
