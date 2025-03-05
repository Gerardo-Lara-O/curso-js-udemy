const resproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo canción: ${id}`);
        
    },
    paudar: function(){
        console.log(`Pausando...`);
        
    },
    borrar: function(id){
        console.log(`Borrando cancion ${id}`);
        
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la playlist de ${nombre}`);
        
    },
}

resproductor.reproducir(30)

// resproductor.borrar = function(id){
//     console.log(`Borrando cancion ${id}`);
    
// }

resproductor.borrar(30)
resproductor.crearPlaylist(`Rock 80s`)