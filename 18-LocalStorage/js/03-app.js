localStorage.removeItem('nombre')
const meses = ['enero','febrero','marzo','abril']
// guardar en local
localStorage.setItem('meses',JSON.stringify(meses))

// obtener desde el local
const mesesArray = JSON.parse(localStorage.getItem('meses'))
console.log(mesesArray);

mesesArray.push('Mayo')
console.log(mesesArray);

// volvemos a usar setItem para actualizarlo
localStorage.setItem('meses',JSON.stringify(mesesArray))

localStorage.clear()
