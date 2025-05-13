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