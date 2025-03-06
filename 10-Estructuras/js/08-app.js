const autenticado = true

if (autenticado === true) {
    console.log('El usuario esta autenticado');
    
}



const puntaje = 450
function revisarPuntaje(){
    if (puntaje > 400) {
        console.log('Ecelente');
        return;
    }
    
    if (puntaje > 300) {
        console.log('Buen puntaje');
        return;
    }

}
