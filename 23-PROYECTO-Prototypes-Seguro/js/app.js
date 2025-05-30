// Constructores
function Seguro(marca, year, tipo) {
  this.marca = marca;
  this.year = year;
  this.tipo = tipo;
}

// Realiza la cotizacion con los datos
Seguro.prototype.cotizarSeguro = function () {
  /*
    1 = Americano 1.15
    2 = Asiatico 1.05
    3 = Europeo 1.35
    */
  console.log(this.marca);
  let cantidad;
  const base = 2000;
  switch (this.marca) {
    case "1":
      cantidad = base * 1.15;
      break;
    case "2":
      cantidad = base * 1.05;
      break;
    case "3":
      cantidad = base * 1.35;
      break;
    default:
      break;
  }

  //    leer el anio
  const diferencia = new Date().getFullYear() - this.year;
  // Cada anio que la diferencia es mayor, el costo va a reducirse un 3%
  cantidad -= (diferencia * 3 * cantidad) / 100;

  /*
  Si el seguro es basico - se multiplica por un 30% mas
  Si el seguro es completo - se multiplica por un 50% mas
  */
  if(this.tipo === 'basico'){
    cantidad *= 1.30

  }else{
    cantidad *= 1.50
  }
  return cantidad
//   console.log(cantidad);
};

function UI() {}
// Llena las opciones de los anios
UI.prototype.llenarOpciones = function () {
  const max = new Date().getFullYear();
  const min = max - 20;

  const selectYear = document.querySelector("#year");
  for (let i = max; i > min; i--) {
    // console.log(i);

    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    selectYear.append(option);
  }
};
// Muestra alertas en pantalla
UI.prototype.mostrarMensaje = function (mensaje, tipo) {
  const div = document.createElement("div");
  if (tipo === "error") {
    div.classList.add("error");
  } else {
    div.classList.add("correcto");
  }

  div.classList.add("mensaje", "mt-10");
  div.textContent = mensaje;

  // Insertar el en HTNML
  const formulario = document.querySelector("#cotizar-seguro");
  formulario.insertBefore(div, document.querySelector("#resultado"));

  setTimeout(() => {
    div.remove();
  }, 3000);
};

UI.prototype.mostrarResultado = (total, seguro) => {
    const {marca,year,tipo} = seguro
    let textoMarca
    switch(marca){
        case '1':
        textoMarca = 'Americano'
        break
        case '2':
        textoMarca = 'Asiatico'
        break
        case '3':
        textoMarca = 'Europeo'
        break
        default:
            break;
    }
    // crear resultado 
    const div = document.createElement('div')
    div.classList.add('mt-10')
    div.innerHTML = `
        <p class="header">Tu resumen</p>
        <p class="font-bold">Marca:<span class="font-normal"> ${textoMarca}</span></p>
        <p class="font-bold">Year:<span class="font-normal"> ${year}</span></p>
        <p class="font-bold">Tipo:<span class="font-normal capitalize"> ${tipo}</span></p>
        <p class="font-bold">Total:<span class="font-normal"> $${total}</span></p>
    `
    const resultadoDiv = document.querySelector('#resultado')

    // mostrar el spinner
    const spinner = document.querySelector('#cargando')
    spinner.style.display = 'block'

    setTimeout(() => {
        spinner.style.display = 'none' // se borra el spiner
    resultadoDiv.appendChild(div) //se muestra el resultado

    }, 3000)
}

// instanciar UI
const ui = new UI();
console.log(ui);

document.addEventListener("DOMContentLoaded", () => {
  ui.llenarOpciones(); //llena el select con los anios
});

eventListeners();
function eventListeners() {
  const formulario = document.querySelector("#cotizar-seguro");
  formulario.addEventListener("submit", cotizarSeguro);
}

function cotizarSeguro(e) {
  e.preventDefault();
  // Leer la marcar seleccionada
  const marca = document.querySelector("#marca").value;

  // leer el annio seleccionado
  const year = document.querySelector("#year").value;
  // leer el tipo de cobertura
  const tipo = document.querySelector('input[name="tipo"]:checked').value;

  if (marca === "" || year === "" || tipo === "") {
    ui.mostrarMensaje("Todos los campos son obligatorios", "error");
    return;
  }
  ui.mostrarMensaje("Cotizando...", "correcto");
//   ocultar las cotizaciones previas
const resultados = document.querySelector('#resultado div')
if(resultados != null){
    resultados.remove()
}
  // Instanciar el seguro
  const seguro = new Seguro(marca, year, tipo);
  // console.log(seguro);
  const total = seguro.cotizarSeguro();

  // Utilizar el prototype que va a cotizar
  ui.mostrarResultado(total,seguro)
}
