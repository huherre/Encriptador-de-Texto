const ingresaTexto = document.querySelector("#entrada");
const respuesta = document.querySelector("#salida");
const botonEncriptar = document.querySelector(".btn-encriptar")
const botonDesencriptar = document.querySelector(".btn-desencriptar")
const botonCopiar = document.querySelector(".btn-copiar")

const bloqueTexto = document.querySelector(".section__mensaje")
const bloqueBoton = document.querySelector("#show")

botonEncriptar.addEventListener("click", btnEncriptar)
botonDesencriptar.addEventListener("click", btnDesencriptar);
botonCopiar.addEventListener("click", btnCopiar)

function btnEncriptar(){
    let mensajeEncriptado = encriptar(ingresaTexto.value)
    if (textoValido()) return;
    respuesta.value = mensajeEncriptado
    ingresaTexto.value = "";
    respuesta.style.backgroundImage = "none"
    bloqueTexto.style.display = "none"
    bloqueBoton.style.display = "block"
}

function btnDesencriptar(){
    let mensajeDesencriptado = desencriptar(ingresaTexto.value)
    if (textoValido()) return;
    respuesta.value = mensajeDesencriptado
    ingresaTexto.value = "";
    respuesta.style.backgroundImage = "none"
    bloqueTexto.style.display = "none"
    bloqueBoton.style.display = "block"
}

function textoValido(){
    let mensajeEscrito = document.querySelector("#entrada").value;
    let validador = mensajeEscrito.match(/^[a-z ]*$/);

    if(!validador || validador === 0) {
        alert("Solo se permiten letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

function encriptar(strEncriptado){
    let key = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat]"]];
    strEncriptado = strEncriptado.toLowerCase();

    for(let i = 0; i < key.length; i++){
        if(strEncriptado.includes(key[i][0])){
            strEncriptado = strEncriptado.replaceAll(key[i][0], key[i][1])

        }
    }
    return strEncriptado
}

function desencriptar(strDesencriptado){
    let key = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat]"]];
    strDesencriptado = strDesencriptado.toLowerCase();

    for(let i = 0; i < key.length; i++){
        if(strDesencriptado.includes(key[i][1])){
            strDesencriptado = strDesencriptado.replaceAll(key[i][1], key[i][0])

        }
    }
    return strDesencriptado
}

function btnCopiar(){
    let copia = respuesta.value
    navigator.clipboard.writeText(copia);
    respuesta.value = "";
    bloqueTexto.style.display = "block"
    bloqueBoton.style.display = "none"
    ingresaTexto.focus();
}
