const nombre = document.getElementById ("name")
const numeroT = document.getElementById ("number")
const identificacion = document.getElementById ("ident")
const usuario = document.getElementById ("Usur")
const email = document.getElementById ("Correo")
const contraseña = document.getElementById ("password")
const validar = document.getElementById ("form")
const parrafo = document.getElementById ("warnings")

form.addEventListener("submit", e=>{

    
    let warnings = ""
    let entrar = false
    let regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}+$/

    parrafo.innerHTML=""

    if(nombre.ariaValueMax.length <6){
        warnings += 'El nombre no es valido <br>'
        entrar = true
    }

    if(!regexEmail.test(email.value)){
        warnings += 'El email no es valido <br>'
        entrar = true
    }

    if (pass.value.length < 8){
        warnings += 'La contraseña no es valida <br>'
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML=warnings
    }else{
        parrafo.innerHTML="Registrado"
    }

    
})

