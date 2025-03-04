const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// Nos va a devolver un array con los keys de los objetos
console.log(Object.keys( producto ));

// Nos retorna los valores
console.log(Object.values(producto));

console.log(Object.entries(producto));
