// Variables
const carrito = document.querySelector('#carrito')
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
let articulosCarrito = [];

const listaCursos = document.querySelector('#lista-cursos')


cargarEventListeners()
function cargarEventListeners(){
    // Cuando agregas un curso presionando "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso)

    // Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso)

    vaciarCarritoBtn.addEventListener('click', () => {
        // console.log('vaciando carrito');
        articulosCarrito = []
        limpiarHTML()
    })
};


// Funciones
function agregarCurso(e){
    e.preventDefault()
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement
        // console.log('presionando');
        // console.log(e.target.parentElement.parentElement);
        leerDatosCurso(cursoSeleccionado)
    }
}
// Elimina un curso del carrito
function eliminarCurso(e){
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id')
        // Elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId)

        // console.log(articulosCarrito);
        carritoHTML() // Iterar sobre el carrito y mostrar su HTML
    }
}

// Lee el contenido del HTML al que le dimos click y extrae la informacion del curso

function  leerDatosCurso(curso){
    // console.log(curso);
    // Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('.info-card h4').textContent,
        precio: curso.querySelector('.precio .u-pull-right').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id)
    if (existe) {
        // Actualizamos la cantidad
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso // retorna el objeto actualizado
            }else{
                return curso // retorn alos objetos que no son los duplicados
            }
        })
        articulosCarrito = [...cursos]
    }else{
        // Agregamos el curso al carrito
        articulosCarrito = [... articulosCarrito, infoCurso]
    }
    
    carritoHTML()
}


//  Muestra el carrito de compras en el HTML  
function carritoHTML(){

    // Limpiar el HTML
    limpiarHTML()

    // Recorre el carrito y genera el HTML
    articulosCarrito.forEach((curso) => {
        const {imagen, titulo, precio, cantidad, id} = curso
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100px">
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${curso.precio}
            </td>
            <td>
                ${curso.cantidad}
            </td>

            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}"> X </a>
            </td>
        `;
        // Agrega el HTML del carrito en el tbody
        contenedorCarrito.append(row)
    })
    
}

// Elimina los cursos del tbody
function limpiarHTML(){
    // Forma lenta
    // contenedorCarrito.innerHTML = ''

    // Forma rapida
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}