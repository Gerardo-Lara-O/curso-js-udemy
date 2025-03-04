const carrito = [
    {nombre: "Monitor 27 pulgada", precio: 500},
    {nombre: "Mouse", precio: 300},
    {nombre: "Lavadora", precio: 200},
    {nombre: "Bici", precio: 100},
    {nombre: "Teclado", precio: 400}
]

// for(let i = 0;i < carrito.length; i++){
//     console.log(carrito[i].nombre);
// }

carrito.forEach(function(producto){
    console.log(`${producto.nombre} - Precio ${producto.precio}`)
})

