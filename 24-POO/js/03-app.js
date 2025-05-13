class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre
        this.saldo = saldo
    }
    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de: ${this.saldo}`
    }
}

const juan = new Cliente('juan',400)

// Herencia
class Empresa extends Cliente{
    constructor(nombre, saldo, telefono,categoria){
        super(nombre,saldo)
        this.telefono = telefono;
        this.categoria = categoria
    }
    mostrarInformacion(){
        return `Bienvenido al cajero de empresa`
    }
}

const empresa = new Empresa('Codigo con juan', 800,55544334,'Empresa')