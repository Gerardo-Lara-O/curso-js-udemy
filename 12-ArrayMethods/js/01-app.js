const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Comprobar si un valor existe en un arreglo
meses.forEach((mes)=> {
    if(mes == 'Enero'){
        console.log("Enero si existe");
    }
})

const resultado = meses.includes('Enero')
console.log(resultado);


// Some
const existe = carrito.some((producto)=>{
    return producto.nombre === 'Celular'
})

console.log(existe);

const existe2 = meses.some((mes)=> mes === 'Diciembre')
console.log(existe2);


meses.forEach((mes,indice)=>{
    if (mes === 'Abril') {
        console.log(`Encontrado en el indice ${indice}`);
        
    }
})

const indice = meses.findIndex( mes => mes === 'Abril')
console.log(indice);



const indice2 = carrito.findIndex( (producto) => producto.nombre === 'Celular')
console.log(indice2);

