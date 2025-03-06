// Operador Mayor que y menor que 
const dinero = 300
const totalAPagar = 500
const tarjeta = true

if(dinero >= totalAPagar){
    console.log(`Si podemos pagar`);
    
}else if(tarjeta){
    console.log('Si puedo pagar por que tengo la tarjeta');
    
}else{
    console.log('Fondos insuficientes');
    
}