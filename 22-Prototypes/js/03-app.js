function Cliente(nombre,saldo){
    this.nombre = nombre
    this.saldo = saldo
}

function Empresa(nombre,saldo, categoria){
    this.nombre = nombre
    this.saldo = saldo
    this.categoria = categoria
}


// FUNCIONES
Cliente.prototype.tipoCliente = function(){
    let tipo;
    if (this.saldo > 10000) {
        tipo= 'Gold'
    }else if (this.saldo >= 5000) {
        tipo= 'Platinum'
    }else{
        tipo= 'Normal'
    }
    
    return tipo
}

Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}, Saldo ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retirarSaldo = function(retirar){
    this.saldo -= retirar

}




// INSTANCIAS
const pedro = new Cliente('Pedro', 6000)

const CCJ = new Empresa('codigo con juan', 40000, 'cursos en linea')


console.log(pedro);

console.log(pedro.nombreClienteSaldo());

pedro.retirarSaldo(1000)
console.log(pedro.nombreClienteSaldo());
