function iniciarApp(){
    console.log('Iniciando app ...');
    
    segundaFuncion()
}


function segundaFuncion(){
    console.log('Sesde la segunda funcion');
    usuarioAutenticado('Pablo')

}

function usuarioAutenticado(usuario){
    console.log('Autentucando usuario ... espere ...');
    console.log(`Usuario autenticado exitosamente, ${usuario}`);
    
    
}

iniciarApp()