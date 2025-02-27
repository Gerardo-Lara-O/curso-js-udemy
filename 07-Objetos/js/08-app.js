"use strict"
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}
Object.freeze(producto)

// El proble es que ese objeto se puede editar
// producto.disponible = false;

// delete producto.precio;

console.log(producto);
console.log(Object.isFrozen(producto)); // true


