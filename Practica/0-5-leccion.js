let dato= new Date();

let hora = () => {
    console.log(dato.getHours());
};

function minuto () {
    console.log(dato.getMinutes());
}

setInterval(hora, 3600000);

setInterval(minuto, 10000);

setTimeout(minuto,10000);