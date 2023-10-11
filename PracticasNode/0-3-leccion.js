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