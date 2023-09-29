//Ejercicio de Calendario de Estaciones del año Argentina
/*
Verano (21 de diciembre a 20 de marzo). 
Otoño (21 de marzo a 20 de junio). 
Invierno (21 de junio a 20 de septiembre). 
Primavera (21 de septiembre a 20 de diciembre).
*/ 
let mes = 12;
let dia = 20;
let estacion = ["Verano", "Otoño", "Invierno", "Primavera"];

if(mes > 12 || mes <=0){
    console.log("No existe ese mes");
}
else if(dia > 31 || dia <=0){
    console.log("Intente otro dia");
}
else{
        if (mes == 12 || mes >= 1 && mes <=3){
            if(mes == 12 && dia >= 21)console.log("Es : " + estacion[0]);
            else if(mes >= 1 && mes <= 2 && dia <= 31 )console.log("Es : " + estacion[0]);
            else if(mes ==3 && dia <= 20)console.log("Es : " + estacion[0]);
        }

        if(mes >= 3 && mes <= 6){
            if(mes == 3 && dia >= 21)console.log("Es : " + estacion[1]);
            else if(mes >= 4 && mes <=5 && dia <= 31)console.log("Es : " + estacion[1]);
            else if(mes == 6 && dia <=20)console.log("Es : " + estacion[1]);
        }

        if (mes >= 6 && mes <=9){
            if(mes == 6 && dia >=21) console.log("Es : " + estacion[2]);
            else if(mes >= 7 && mes <=8 && dia <= 31)console.log("Es : " + estacion[2]);
            else if(mes == 9 && dia <= 20)console.log("Es : " + estacion[2]);
        }

        if (mes >= 9 && mes <=12){
            if(mes == 9 && dia >=21)console.log("Es : " + estacion[3]);
            else if(mes >= 10 && mes <= 11 && dia <= 31)console.log(estacion[3]);
            else if(mes == 12 && dia <= 20)console.log(estacion[3]);
        }
}