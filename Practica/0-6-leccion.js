//Monohilos Node.js

console.log("Probando Monohilo");
let i = 0

setInterval(function(){
    if (i<=5) console.log("primera instrucción: "+i)
    i++;
},1000);

setInterval(function(){
    if(i>=5 && i<=10) console.log("segunda instrucción: "+i);
},1000);