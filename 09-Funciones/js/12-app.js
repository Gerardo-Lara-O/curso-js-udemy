const carrito = [
    {nombre: "Monitor 27 pulgada", precio: 500},
    {nombre: "Mouse", precio: 300},
    {nombre: "Lavadora", precio: 200},
    {nombre: "Bici", precio: 100},
    {nombre: "Teclado", precio: 400}
]

const carrito1 = carrito.map(producto => `${producto.nombre} - Precio ${producto.precio}`)

const carrito2 = carrito.forEach(producto => `${producto.nombre} - Precio ${producto.precio}`)


console.log(carrito1);
console.log(carrito2);

