//funciones Asincronas simples
function Asincrona(otraFuncion){
    setTimeout(function(){
        console.log('Ejecutado al segundo 2');
        otraFuncion();
    },2000);
}

Asincrona(function(){
    console.log('Terminando proceso');
});  

function hola(nombre, micallback) {
    setTimeout(function() {
      console.log("Hola, " + nombre);
      micallback(nombre);
    }, 1000);
  }
  
  function adios(nombre, otrocallback) {
    setTimeout(function() {
      console.log("Adios", nombre);
      otrocallback();
    }, 1000);
  }
  
  console.log("Iniciando");
  hola("Michael", function(nombre) {
    adios(nombre, function() {
      console.log("Terminando");
    });
  });

  function conversacion(nombre, veces, callback) {
    if (veces >= 0) {
      hablar(function() {
        conversacion(nombre, --veces, callback);
      });
    } else {
      adios(nombre, callback);
    }
  }
  function hablar(callbackhablar) {
    setTimeout(function() {
      console.log("bla, bla, bla, bla");
      callbackhablar();
    }, 1000);
  }
  
  console.log("iniciando");
  hola("Michael", function(nombre) {
    conversacion(nombre, 2, function() {
      console.log("proceso terminado");
    });
  });