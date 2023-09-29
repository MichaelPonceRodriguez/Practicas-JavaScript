//Ejercicio de Calendario de Estaciones del año Argentina (IF ELSE)
/*
Verano (21 de diciembre a 20 de marzo). 
Otoño (21 de marzo a 20 de junio). 
Invierno (21 de junio a 20 de septiembre). 
Primavera (21 de septiembre a 20 de diciembre).
*/ 
let numeroMes = 12;
let numeroDia = 20;
let estacion = ["Verano", "Otoño", "Invierno", "Primavera"];

if( numeroMes > 12 || numeroMes <=0){
    console.log("No existe ese Mes");
}
else if(numeroDia > 31 || numeroDia <=0){
    console.log("Intente otro Dia");
}
else{
        if (numeroMes == 12 || numeroMes >= 1 && numeroMes <=3){
            if(numeroMes == 12 && numeroDia >= 21)console.log("Es : " + estacion[0]);
            else if(numeroMes >= 1 && numeroMes <= 2 && numeroDia <= 31 )console.log("Es : " + estacion[0]);
            else if(numeroMes ==3 && numeroDia <= 20)console.log("Es : " + estacion[0]);
        }

        if(numeroMes >= 3 && numeroMes <= 6){
            if(numeroMes == 3 && numeroDia >= 21)console.log("Es : " + estacion[1]);
            else if(numeroMes >= 4 && numeroMes <=5 && numeroDia <= 31)console.log("Es : " + estacion[1]);
            else if(numeroMes == 6 && numeroDia <=20)console.log("Es : " + estacion[1]);
        }

        if (numeroMes >= 6 && numeroMes <=9){
            if(numeroMes == 6 && numeroDia >=21) console.log("Es : " + estacion[2]);
            else if(numeroMes >= 7 && numeroMes <=8 && numeroDia <= 31)console.log("Es : " + estacion[2]);
            else if(numeroMes == 9 && numeroDia <= 20)console.log("Es : " + estacion[2]);
        }

        if (numeroMes >= 9 && numeroMes <=12){
            if(numeroMes == 9 && numeroDia >=21)console.log("Es : " + estacion[3]);
            else if(numeroMes >= 10 && numeroMes <= 11 && numeroDia <= 31)console.log(estacion[3]);
            else if(numeroMes == 12 && numeroDia <= 20)console.log(estacion[3]);
        }
}

//--------------------------------------------------------------------------------------------------------------------------

//Ejercicio de Calendario de Estaciones del año Argentina (SWITCH)
/*
Verano (21 de diciembre a 20 de marzo). 
Otoño (21 de marzo a 20 de junio). 
Invierno (21 de junio a 20 de septiembre). 
Primavera (21 de septiembre a 20 de diciembre).
*/ 
numeroMes = 6;
numeroDia = 20;

if(numeroDia > 31 || numeroDia <=0){
    console.log("Intente otro numeroDia");
}else{
    switch(numeroMes){
        case 1:case 2:
            console.log(estacion[0]);
        break;
        case 3:
            if(numeroDia <=20) console.log(estacion[0]);
            else console.log(estacion[1]);
        break;
        case 4:case 5:
            console.log(estacion[1]);
        break;
        case 6:
            if(numeroDia <=20) console.log(estacion[1]);
            else console.log(estacion[2]);
        break;
        case 7:case 8:
            console.log(estacion[2]);
        break;
        case 9:
            if(numeroDia <=20) console.log(estacion[2]);
            else console.log(estacion[3]);
        break;
        case 10: case 11:
            console.log(estacion[3]);
        break;
        case 12:
            if(numeroDia <=20) console.log(estacion[3]);
            else console.log(estacion[0]);
        break;
        default:
            console.log("Ingrese otro Mes");
    }
}