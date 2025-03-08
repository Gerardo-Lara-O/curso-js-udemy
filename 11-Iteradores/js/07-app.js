const pendientes = ['Tarea', 'Comer', 'Proyectos', 'estudiar JavaScript']

const carrito = [
    {nombre: "Monitor 27 pulgada", precio: 500},
    {nombre: "Mouse", precio: 300},
    {nombre: "Lavadora", precio: 200},
    {nombre: "Bici", precio: 100},
    {nombre: "Teclado", precio: 400}
]
for(let pendiente of pendientes){
    console.log(pendiente);
    
}

for ( let producto of carrito){
    console.log(producto.nombre);
    
}