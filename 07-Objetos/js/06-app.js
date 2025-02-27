const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
	    peso: 114,
	    medida: 55,
        fabricacion: {
	        pais: 'China'
        }
    },
    
}


// Para acceder a nuestro segundo objeto vamos a usar la siguiente sintaxis
const {nombre, informacion, informacion: { fabricacion } } = producto

console.log(nombre) 
console.log(informacion)
console.log(fabricacion)

const { informacion: { fabricacion: { pais } } } = producto
console.log(pais);
