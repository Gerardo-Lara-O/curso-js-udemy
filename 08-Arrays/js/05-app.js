const meses = ['Febrero','Marzo','Abril','Mayo','Junio']


const carrito = [200]
//Definidr un producto
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: "400"
}

const producto2 = {
    nombre: "Monitor 30 pulgadas",
    precio: "300"
}

let resultado;
resultado = [...carrito, producto]
console.log(resultado);

resultado = [producto2, ...resultado]
console.log(resultado);

