function obtener_aleatorio(num_min,num_max){
    const amplitud_valores = num_max - num_min;
    const valor_al_azar = Math.floor( Math.random()* amplitud_valores)+num_min;

    return valor_al_azar;
}
//crea letras en pantalla
function crearLetra(valor){
    var span = document.createElement("span");
    span.textContent = valor;
    escritura_ingresadas.appendChild(span);
}

function verificarTexto(valor){
    var valido = caracteres.test(valor);
    return valido;
}
function espaciosEnBlanco(valor){
    let pal = valor;
    let valido = true;
    let separado = [];
    separado = pal.split("");
    for(let i = 0;i < pal.length;i++){
        if(separado[i] == " "){
            valido = false;
        }
    }
    return valido;
}