// Object Literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// Object Constructor
function Producto(nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

// instancia
const producto2 = new Producto('Monitor 24 pulgada',500,true);
console.log(producto2);


