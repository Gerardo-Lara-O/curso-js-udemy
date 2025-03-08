// for(let i = 0; i<=10; i ++){
//     if (i ==5 ) {
//         console.log('CINCO');
//         continue
//     }
//     console.log(`Numero: ${i}`);
    
// }

// queremos decirle al usaurio que uno de los productos tiene descuento

const carrito = [
    {nombre: "Monitor 27 pulgada", precio: 500},
    {nombre: "Mouse", precio: 300},
    {nombre: "Lavadora", precio: 200, descuento: true},
    {nombre: "Bici", precio: 100},
    {nombre: "Teclado", precio: 400}
]

for(let i = 0; i < carrito.length; i++){
    
    if(carrito[i].descuento){
        console.log(`El articulo: ${carrito[i].nombre} tiene descuento`);
        continue
    }
    console.log(carrito[i].nombre);
}