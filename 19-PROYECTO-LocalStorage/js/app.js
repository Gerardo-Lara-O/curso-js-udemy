// Variables
const formulario = document.querySelector('#formulario')
const listaTwets = document.querySelector('#lista-tweets')
let tweets = []




// Event Listeners
eventListeners()

function eventListeners(){
    // Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet)

    // Cuando el documento est alisto
    document.addEventListener('DOMContentLoaded', ()=>{
        tweets = JSON.parse(localStorage.getItem('tweets') || [])
        // console.log(tweets);
        crearHTML()
        
    })
}



// Funciones
function agregarTweet(event){
    event.preventDefault()
    
    // Text area donde el usuario escribe
    const tweet = document.querySelector('#tweet').value
    // Validacion
    if (tweet === '') {
        mostrarError('Un mensaje no puede ir vacio')
        return // evita que se ejecuten mas lineas de codigo
    }
        const tweetObj = {
            id: Date.now(),
            tweet: tweet
        }

        // Anadir al arreglo de tweets
        tweets = [...tweets, tweetObj]

        // Una vez creado vamos a agregar el HTML
        crearHTML()

        // Reiniciar el formulario
        formulario.reset()
}

// Mostrar mensaje de error
function mostrarError(error){
    const errorPrevio = document.querySelector('.error')
    if (errorPrevio) {
        return;
    }
    const mensajeError = document.createElement('p')
    mensajeError.textContent = error
    mensajeError.classList.add('error')

    // Insertarlo en el contenido 
    const contenido = document.querySelector('#contenido')
    contenido.appendChild(mensajeError)
    // Elimina la alerta despues de 2 segundos
    setTimeout(() => {
        mensajeError.remove()
    },2000)

    
}

// Muestra un listado de los tweets
function crearHTML(){
    limpiarHtml()
    if (tweets.length > 0) {
        tweets.forEach(tweet => {
            // Agregar un boton
            const btnEliminar = document.createElement('a')
            btnEliminar.classList.add('borrar-tweet')
            btnEliminar.innerText = 'X'
            // Anadir la funcion de eliminar 
            btnEliminar.onclick = ()=>{
                borrarTweet(tweet.id)
            }

            // Crear el HTML
            const li = document.createElement('li')

            // Anadir el texto
            li.textContent = tweet.tweet

            // Asignar el boton
            li.append(btnEliminar)

            // Insertarlo en el html
            listaTwets.append(li)
        })
    }

    sincronizarStorage()
}

// Agrega los tweets actuales a local storage
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets))
}

// Elimina un tweet
function borrarTweet(id){
    // console.log('Eliminando',id);
    tweets = tweets.filter( tweet => tweet.id !== id)
    crearHTML()    
}

// Limpiar el HTML
function limpiarHtml(){
    while(listaTwets.firstChild){
        listaTwets.removeChild(listaTwets.firstChild)
    }
}