// Variables
const carrito = document.querySelector('#carrito')
const listaCursos = document.querySelector('#lista-cursos')
const contenedorCarrito = document.querySelector('#carrito tbody')

const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
let articulosCarrito = []



// Listeners
// Junta los listeners, esta funcion va a ser un registro donde tengamos a todos los listeners
cargarEventListeners()
function cargarEventListeners(){
    // Cuando agregas un curso presionando el boton
    listaCursos.addEventListener('click', agregarCurso)

    // Muestra los cursos del Local Storage
    document.addEventListener('DOMContentLoaded',()=>{
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || []
        carritoHTML()
    })

    // Elimina cursos del carrito
    carrito.addEventListener('click',eliminarCurso)

    // Vaciar carrito
    vaciarCarritoBtn.addEventListener('click',()=>{
        articulosCarrito = []
        limpiarHTML()
    })
}





// FUNCIONES
function agregarCurso(e){
    e.preventDefault()
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement
        leerDatodCurso(cursoSeleccionado)
    }
    
}

// Elimina un curso
function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id')
        
        // Elimina del arreglo por el data id
        articulosCarrito = articulosCarrito.filter(curso => {
            if(curso.id === cursoId){
                curso.cantidad--
                if(curso.cantidad < 1){
                    delete curso
                }else{
                    return curso
                }
            }else{
                return curso
            }
        })
        carritoHTML()
    }
    
}

// Lee el contenido del HTML al que le dimos click
function leerDatodCurso(curso){
    
    // Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        cantidad: 1,
        id: curso.querySelector('.agregar-carrito').getAttribute('data-id')
    }

    // Revisa si un elemnto ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id)

    if(existe){
        // Actualizamos la cantidad
        const cursos = articulosCarrito.map((curso)=> {
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso // retorna el objeto actualizado
            }else{
                return curso // retorna los objetos que no son duplicados
            }
        })
        articulosCarrito = [...cursos]
    }else{
        // Agregamos el curso al carrito
        // Agrega elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoCurso]
    }
    carritoHTML()
    

    
}

// Muestra el carrito de compras en el HTML
function carritoHTML(){
    // Limpiar HTML
    limpiarHTML()
    // Recorre el carrito y genera el HTML
    articulosCarrito.forEach(curso => {
        const {imagen,titulo,precio,cantidad,id } = curso
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}">X</a>
            </td>
        `
        
        // Agrega el HTML del carrito en el tbody
        contenedorCarrito.append(row)
    })
    // Agregar el carrito de compras al Storage
    sincronizarStorage()
}

function sincronizarStorage(){
    localStorage.setItem('carrito',JSON.stringify(articulosCarrito))
}

function limpiarHTML(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}