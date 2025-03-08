

// for (let index = 0; index < 10; index++) {
//     console.log(`Numero: ${index}`);
// }

for(let i = 0; i <= 20; i++){
    if( i % 2 === 0){
        // console.log(`Los numeros ${i} son pares`);
        
    }else{
        // console.log(`Los numeros ${i} son inpares`);
    }
}


const carrito = [
    {nombre: "Monitor 27 pulgada", precio: 500},
    {nombre: "Mouse", precio: 300},
    {nombre: "Lavadora", precio: 200},
    {nombre: "Bici", precio: 100},
    {nombre: "Teclado", precio: 400}
]

for (let i = 0; i < carrito.length; i++) {
    const element = carrito[i].nombre;
    console.log(element);
    
}