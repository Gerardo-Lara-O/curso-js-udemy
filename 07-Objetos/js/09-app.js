"use strict"
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}
Object.seal(producto)

producto.disponible = false;

// delete producto.precio;

console.log(Object.isSealed(producto));


