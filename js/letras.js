//letra = document.querySelector(".letra");
escritura = document.querySelector(".escritura");

var palabras = ["PALABRA"];


//caracteres permitidos
var caracteres = /[A-ZÑ]/;
function verificarTexto(valor){
    var valido = caracteres.test(valor);
    return valido;
}

//crea letras en pantalla
function crearLetra(valor){

    var letraCreada = document.createElement("div");
    letraCreada.classList.add("letra");
    letraCreada.textContent = valor;
    escritura.appendChild(letraCreada);
    
    //letra.style.color = "black";asd
}
function ingresaLetra(event){
    var valorLetra = event.key;
    valorLetra = valorLetra.toUpperCase();
    valorLetra = String(valorLetra);
    //
    var cadena = palabras[0];
    //
    //verificardor si es letra
    if ((verificarTexto(valorLetra))&&(valorLetra.length == "1")) {
        var cadena = comprarar(cadena,valorLetra);
        crearLetra(valorLetra);
        
    } else {
        console.log("numero o signo");
    }
    
    
}

function desaserPalabra(palabra){
    
}
function comprarar(cadena,letra){
 var compara = cadena;
 var cada = [];
 cada = compara.split("");

 
 for (let i = 0; i < cada.length; i++) {
    if(cada[i] == letra){
        cada.splice(i,1);
        console.log("si coinside");
    }else{
        console.log("no coinside");
    }
    
 }
 console.log("sobrante = " + cada);
 return cada;
 //console.log(cada);
 //console.log(cada.length)
}
//console.log(comprarar())
//limita clicks a letras
//array de letras
document.addEventListener("keydown",ingresaLetra)
