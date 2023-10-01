//Utilizando funciones con parametros

function sumar(a, b, c){
    return a + b + c;
}

function restar(a, b, c){
    return a - b - c;
}

//Utilizando funciones sin parametros
function sumarArguments(){
    let suma = 0;
    for(let i=0; i<arguments.length;i++){
        suma += arguments[i];
    }
    return suma;
}

console.log(sumar(10,2,3));
console.log(restar(10,20,30));
console.log(sumarArguments(1,2,3,4,5,6,7,8,9,10));
