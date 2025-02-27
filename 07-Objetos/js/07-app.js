const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// El proble es que ese objeto se puede editar
producto.disponible = false;

delete producto.precio;

console.log(producto);
