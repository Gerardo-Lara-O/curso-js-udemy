// Obtener datos
const nombre = localStorage.getItem('nombre')
console.log(nombre);

// Guardar objetos y arrays
const usuario = {nombre: 'Gerardo', id: 123}
localStorage.setItem('usuario',JSON.stringify(usuario))

// Como convertir un string a un objeto
const objeto = localStorage.getItem('usuario')
console.log(objeto);
console.log(JSON.parse(objeto));


