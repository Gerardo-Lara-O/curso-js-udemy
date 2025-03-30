// Object constructor
function Cliente(nombre,saldo){
    this.nombre = nombre
    this.saldo = saldo
}

const gerardo = new Cliente("Gerardo",500)
console.log(gerardo);

function formatearCliente(cliente){
    const { nombre, saldo } = cliente
    return `El cliente ${nombre} tiene un saldo de ${saldo}`
}
console.log(formatearCliente(gerardo));



function Empresa(nombre,saldo, categoria){
    this.nombre = nombre
    this.saldo = saldo
    this.categoria = categoria
}

function formatearEmpresa(empresa){
    const { nombre, saldo, categoria } = empresa
    return `El cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria ${categoria}`
}

const CCJ = new Empresa('codigo con juan', 40000, 'cursos en linea')
console.log(formatearEmpresa(CCJ));
