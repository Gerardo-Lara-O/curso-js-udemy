const enlace = document.createElement('a');
const navegacion = document.querySelector('.navegacion')

// Agregando el texto
enlace.textContent = 'Nuevo Enlace'

// Anadiendo href
enlace.href = '/nuevo-enlace'

// Agregando el elemento
enlace.target = "/nuevo-enlace"
// agregando el elemento a nuestro contenedor
// navegacion.appendChild(enlace)

// usando insertBefore
navegacion.insertBefore(enlace,navegacion.children[1])

// Agregando attributos
enlace.setAttribute('data-enlace','nuevo-enlace')

console.log(enlace);



// Crear un CARD
const parrafo1 = document.createElement('p')
parrafo1.textContent = "Concierto"
parrafo1.classList.add('categoria','concierto')


const parrafo2 = document.createElement('p')
parrafo2.textContent = 'Concierto de Rock'
parrafo2.classList.add('titulo')


const parrafo3 = document.createElement('p')
parrafo3.textContent = "$800 por persona"
parrafo3.classList.add('precio')

const info = document.createElement('div')
info.classList.add('info')

info.append(parrafo1,parrafo2,parrafo3)

const imagen = document.createElement('img')
imagen.src = 'img/hacer2.jpg'
// crear el card
const card = document.createElement('div')
card.classList.add('card')
// Asignar la imagen
card.append(imagen,info)

// insertar enb el html
const contenedor = document.querySelector('.hacer .contenedor-cards')
contenedor.appendChild(card)


console.log(card);
