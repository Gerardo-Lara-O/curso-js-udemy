const pendientes = ['Tarea', 'Comer', 'Proyectos', 'estudiar JavaScript']

pendientes.forEach((pendiente, indice) => console.log(`${indice}: ${pendiente}`))


const carrito = [
    {nombre: "Monitor 27 pulgada", precio: 500},
    {nombre: "Mouse", precio: 300},
    {nombre: "Lavadora", precio: 200},
    {nombre: "Bici", precio: 100},
    {nombre: "Teclado", precio: 400}
]

const nuevoArreglo = carrito.map( producto => `${producto.nombre}: ${producto.precio}`)
console.log(nuevoArreglo);
