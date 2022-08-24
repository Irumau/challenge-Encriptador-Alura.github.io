

const inputTexto = document.querySelector(".input-texto");

const textoRecibido = document.querySelector(".texto-recibido")

const llaves = [["e","enter"], ["i","imes"], ["a","ai"],["o","ober"], ["u","ufat"]]




function btnEncriptar(){
    const textoEncriptado = encriptarTexto(inputTexto.value)
    textoRecibido.value = textoEncriptado;
    textoRecibido.style.backgroundImage = "none";
    document.getElementById("info").style.visibility = "hidden";
    inputTexto.value = "";
}


function btnDesencriptar(){
    const textoEncriptado = desencriptarTexto(inputTexto.value)
    textoRecibido.value = textoEncriptado;
    textoRecibido.style.backgroundImage = "none";
    document.getElementById("info").style.visibility = "hidden";
    inputTexto.value = "";
}


function btnCopiar(){
    textoRecibido.select();
    navigator.clipboard.writeText(textoRecibido.value);
    textoRecibido.value = "";
    textoRecibido.style.backgroundImage = "url(../assets/Muñeco.svg)";
    document.getElementById("info").style.visibility = "visible";
}


function encriptarTexto(textoEncriptado){
    textoEncriptado = textoEncriptado.toLowerCase();

    for(var i = 0; i < llaves.length; i++){
        if (textoEncriptado.includes(llaves[i][0])){
            textoEncriptado = textoEncriptado.replaceAll(llaves[i][0],llaves[i][1])
        }
    }
    return textoEncriptado
}


function desencriptarTexto(textoDesencriptado){
    textoDesencriptado = textoDesencriptado.toLowerCase();

    for(var i = 0; i < llaves.length; i++){
        if (textoDesencriptado.includes(llaves[i][1])){
            textoDesencriptado = textoDesencriptado.replaceAll(llaves[i][1],llaves[i][0])
        }
    }
    return textoDesencriptado
}




