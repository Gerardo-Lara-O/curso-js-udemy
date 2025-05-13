class Cliente {
    #nombre
    constructor(nombre, saldo){
        this.#nombre = nombre
        this.saldo = saldo
    }
    mostrarInformacion(){
        return `Cliente: ${this.#nombre}, tu saldo es de: ${this.saldo}`
    }

    setNombre(nombre){
        this.#nombre = nombre
    }

    getNombre(){
        return this.#nombre
    }
}

const juan = new Cliente('juan',400)

// De esta forma puedo acceder desde la clase o el objeto
console.log(juan.mostrarInformacion());
