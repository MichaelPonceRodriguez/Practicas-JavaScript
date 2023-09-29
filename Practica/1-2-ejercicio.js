// Ejercicio Cálculo Hora del Día
/*
    00:00 a 06:30 hrs -> Madrugada
    06:31 a 12:30 hrs -> Buen día
    12:31 a 18:30 hrs -> Buenas tardes
    18:31 a 24:00 hrs -> Buenas noches
*/

let hora = 24;
let minuto = 0;
if(hora > 24 || hora < 0){
    console.log("Indique otra hora");
}else if (minuto > 59 || minuto < 0){
    console.log("Indique otro minuto");
}

else{
    if(hora >= 0 && hora <= 5 && minuto <= 59 || hora == 6 && minuto <= 30) console.log("Madrugada");
    if(hora == 6 && minuto > 30 || hora >= 7 && hora <=11 && minuto <= 59 || hora == 12 && minuto <= 30) console.log("Buen día");;
    if(hora == 12 && minuto > 30 || hora >= 13 && hora <=17 && minuto <= 59 || hora == 18 && minuto <= 30) console.log("Buen tardes")
    if(hora == 18 && minuto > 30 || hora >= 19 && hora < 24 && minuto <= 59|| hora == 24 && minuto == 0) console.log("Buen noches");
}

