const producto = '     Monitor 20 pulgadas " ';
console.log(producto);
console.log(producto.length);


// espacios iniciales
console.log(producto.trimStart());

// espacios finales
console.log(producto.trimEnd());
console.log(producto.length);

// Antes se podia borrar solo con el metodo trim() los 2 espacios pero ahora se pueden concatenar, tambien conocido como chaning

console.log(producto.trimStart().trimEnd());


