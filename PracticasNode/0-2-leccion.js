//Entornos
let nombre = process.env.NOMBRE || 'Sin nombre'
let apellido = process.env.APELLIDO || 'Sin apellido'
let edad = process.env.EDAD || 'Sin edad'


console.log("Bienvenido " + nombre + " "+ apellido+ " de "+edad + " años");
