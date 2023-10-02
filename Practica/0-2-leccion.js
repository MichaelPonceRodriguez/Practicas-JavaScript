/*
Operadores aritmeticos
Sentencia de control Switch

*/
let numero = 21;
let numero2 = 10;
let resultado;
// calculadora
let opcion = 4;

switch(opcion){
    case 1:
    resultado = numero + numero2;
    console.log(resultado);
        break;
    case 2:
        resultado = numero - numero2;
        console.log(resultado);
        break;
    case 3:
        resultado = numero * numero2;
        console.log(resultado);
        break;
    case 4:
        resultado = numero / numero2;
        console.log(resultado);
        break;        
}