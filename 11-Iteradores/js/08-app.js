const pendientes = ['Tarea', 'Comer', 'Proyectos', 'estudiar JavaScript']

for (let pendiente in pendientes){
    console.log(pendiente);
    
}

const automovil = {
    modelo: "camaro",
    year: 1965,
    motor: '6.0'
}

// Primera forma
for (propiedad in automovil){
    console.log(`${propiedad} = ${automovil[propiedad]}`);
    
}


// Seunda forma ES7
for ( let [llave,valor] of Object.entries(automovil)){
    console.log(valor);
    
}