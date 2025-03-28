// Para agregar elementos 
localStorage.setItem('nombre','Gerardo')

// Guardar objetos y arrays
const usuario = {nombre: 'Gerardo', id: 123}
localStorage.setItem('usuario',JSON.stringify(usuario))