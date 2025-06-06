document.addEventListener('DOMContentLoaded',function(){

    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    //  Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email')
    const inputAsunto = document.querySelector('#asunto')
    const inputMensaje = document.querySelector('#mensaje')
    const formulario = document.querySelector('#formulario')
    const btnSubmit = document.querySelector('#formulario button[type="submit"]')
    const btnReset = document.querySelector('#formulario button[type="reset"]')
    const spinner = document.querySelector('#spinner')

    // Asignar eventos
    inputEmail.addEventListener('input', validar)
    inputAsunto.addEventListener('input', validar)
    inputMensaje.addEventListener('input', validar)

    formulario.addEventListener('submit', enviarEmail)

    btnReset.addEventListener('click',function(e){
        e.preventDefault();
        resetFormulario()
    })

    function enviarEmail(e){
        e.preventDefault()
        // console.log('Enviando...');
        spinner.classList.remove('hidden')

        setTimeout(()=>{
            spinner.classList.add('hidden')
            resetFormulario()
            // Crear una alerta
            const alertaExito = document.createElement('p')
            alertaExito.classList.add('bg-green-500','text-white', 'p-2','text-center','rounded-lg', 'mt-10','font-bold','text-sm','uppercase')
            alertaExito.textContent = "Mensaje enviado correctamente";

            formulario.appendChild(alertaExito)

            setTimeout(() => {
                alertaExito.remove()
            }, 3000);
        },3000)
    }

    function validar(e){
        // console.log(e.target.parentElement);
        
        if (e.target.value.trim() === '') {
            // console.log('Esta vacio');
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement)
            email[e.target.name] = ''
            comprobarEmail()
            return;
        }
        if (e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('El email no es valido', e.target.parentElement)
            email[e.target.name] = ''
            comprobarEmail()
            return
        }
        

        limpiarAlerta(e.target.parentElement)


        // Asignar los valores
        email[e.target.name] = e.target.value.trim().toLowerCase()
        
        // Comprobar el objeto de email
        comprobarEmail()
        
    }

    function mostrarAlerta(mensaje, referencia) {
        // Compruba si ya existe una alerta
        limpiarAlerta(referencia)


        // Generar alerta en HTML
        const error = document.createElement('p')
        error.textContent = mensaje
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center')

        // Inyectar el error al formulario
        referencia.appendChild(error)
    }

    function limpiarAlerta(referencia){
        // Compruba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600')
        if (alerta) {
            alerta.remove()
        }
    }

    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 

        const resultado = regex.test(email)
        console.log(resultado);
        return resultado
    }

    function comprobarEmail(){
        console.log(email);
        
        if(Object.values(email).includes('')){
            btnSubmit.classList.add('opacity-50')
            btnSubmit.disabled = true
            return
        }
            btnSubmit.classList.remove('opacity-50')
            btnSubmit.disabled = false
        
    }

    function resetFormulario(){
                // reiniciar el objeto
                email.email = '';
                email.asunto = '';
                email.mensaje = '';
        
                formulario.reset();
                comprobarEmail();
    }

})