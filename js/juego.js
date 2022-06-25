var iniciar_juego = document.querySelector(".iniciar-juego");
var agregar_palabra = document.querySelector(".agregar-palabra");
//////////////////////////////////////
var guardar_empezar = document.querySelector(".guardar-empezar");
var cancelar = document.querySelector(".cancelar");
//////////////////////////////
var nuevo_juego = document.querySelector(".nuevo-juego");
var desistir = document.querySelector(".desistir");
////////////////////////////

var palabra_nueva = document.querySelector(".palabra-nueva")
var escritura = document.querySelector(".escritura");
var escritura_ingresadas = document.querySelector(".escritura-ingresadas");
var alerta = document.querySelector(".alerta");

let contador_repetidos = 0;
let vidas = 0;
let cantidad_aciertos = 0;

let repetida = [9];
let palabras = [
    "carpeta",
    "leer",
    "zapato",
    "alura",
    "gato",
    "campana"
]
var palabrita;
//caracteres permitidos
var caracteres = /[A-ZÑ]/;
var numericos = /[0-9]/;



//pantalla 1
iniciar_juego.addEventListener("click",iniciar_el_juego);
agregar_palabra.addEventListener("click",function(){
    pantalla(2);
    alerta.innerHTML = "";
    palabra_nueva.value = "";

    
})
//pantalla 2
guardar_empezar.addEventListener("click",function(){
    let nueva = palabra_nueva.value;
    
    alerta.innerHTML = "";
    
    if(!(numericos.test(palabra_nueva.value))){
        if(espaciosEnBlanco(nueva)&&(palabra_nueva.value !== "")){
            nueva = nueva.toUpperCase();
            palabras.push(nueva);
            mostrar_palabra();
            pantalla(3);
        }else{
            alerta.innerHTML = "";
            var alert = document.createElement("p");
            alert.textContent = "Tiene espacios en blanco";
            alerta.appendChild(alert);
        }
    }else{
        alerta.innerHTML = "";
        var alert = document.createElement("p");
        alert.textContent = "Texto no valido";
        alerta.appendChild(alert);
    }
    
    
    
})
cancelar.addEventListener("click",function(){
    pantalla(1);
})
//pantalla 3
nuevo_juego.addEventListener("click",function(){
    
    escritura_ingresadas.innerHTML = "";
    mostrar_palabra();
});
desistir.addEventListener("click",function(){
    vidas = 0;
    
    //console.log("perdiste!!!!"+palabrita)
    pantalla(1);
})



//inicia el juego
function iniciar_el_juego(){
    
    pantalla(3);
    mostrar_palabra();
}




function mostrar_palabra(){
    cantidad_aciertos = 0;
    contador_repetidos = 0;
    vidas = 9;
    estados(9);
    repetida = null;
    repetida = [9];
    escritura.innerHTML = "";
    escritura_ingresadas.innerHTML = "";

    var numero_random = obtener_aleatorio(0,palabras.length);
    palabrita = palabras[numero_random];
    palabrita = palabrita.toUpperCase();
    //console.log(palabrita);//

    for(let i = 0; i < palabrita.length;i++){
        var span = document.createElement("span");
        escritura.appendChild(span);
    }
    
    document.addEventListener("keydown",ingresaLetra);
       
}

function ingresaLetra(event){
    const spans = document.querySelectorAll(".escritura span")
    var valorLetra = event.key;
    valorLetra = valorLetra.toUpperCase();
    valorLetra = String(valorLetra);
    let acerto = false;
    let letraR = "";
    var es_repetida = false;
    const palabra = palabrita;
    
    
    if ((verificarTexto(valorLetra))&&(valorLetra.length == "1")) {
        letraR = valorLetra;
        //conprovar valor repetido
        
        if (vidas > 0) {
            for(let i = 0; i <= repetida.length;i++){
                if (letraR == repetida[i]) {
                    es_repetida = true;
                } 
            }
            if (es_repetida == false) {
                repetida[contador_repetidos] = letraR;
                contador_repetidos++;
                es_repetida = true;
                //console.log("el numero push es:"+ repetida[contador_repetidos]+"el contador es"+ contador_repetidos);
                
                for(let i = 0; i < palabra.length; i++ ){
                    if(valorLetra == palabra[i]){
                        spans[i].innerHTML = valorLetra;
                        cantidad_aciertos++;
                        acerto = true;
                        //console.log("asiertos :  "+ cantidad_aciertos);
                    }
                    
                }
                if(acerto == false){
                    crearLetra(valorLetra);
                    vidas--;
                }
                estados(vidas);
                if (vidas == 0) {
                    estados(0);
                    //console.log("perdiste!!!!!!!!!"+palabrita);
                }else if(cantidad_aciertos == palabra.length){
                    estados(10);
                    vidas = 0;
                }
                
            }
        }
        
        //console.log(palabra);
        
    } else {
        //console.log("numero o signo");
        
    }
    

    
}






