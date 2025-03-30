// Object literal
const cliente = {
    nombre: 'Gerardo',
    apellido: 'Lara'
}

console.log(cliente);


// Object constructor
function Cliente(nombre,apellido){
    this.nombre = nombre
    this.apellido = apellido
}

const gerardo = new Cliente("Gerardo",'Lara')
console.log(gerardo);
