var area_del_dibujo = document.querySelector(".dibujo");
var pincel  = area_del_dibujo.getContext("2d");
var abajo = 68;
var derecha = 50;
//quintoEstado();
function estados(numero){
    switch (numero) {
        case 1:
            piernaIzquierda(242,100);
            
            break;
        case 2:
            brazoDerecho(242,100);
            
            break;
        case 3:
            brazoIzquierdo(242,100);
            break;
        case 4:
            tronco(242,100);
            break;
        case 5:
            quintoEstado();
            break;
        case 6:
            cuartoEstado();
            break;
        case 7:
            tercerEstado();
            break;
        case 8:
            segundoEstado();
            break;
        case 9:
            primerEstado();
            break;
        case 0:
            piernaDerecha(242,100);
            escrito(110,225,"PERDISTE!!!","red");
            pincel.fillStyle = "black";
            pincel.font="bold 10px arial"; //estilo de texto
            pincel.fillText("La palabra era : "+palabrita,100,268);
            break;
        case 10:
            gano(palabrita);
        default:
            break;
    }
    
    
}

function primerEstado(){
    pincel.fillStyle = "white";
    pincel.fillRect(0,0,300,300);

    pincel.fillStyle = "grey";
    pincel.fillRect(0,250,300,5);

}
function segundoEstado(){
    primerEstado();
    pincel.fillStyle = "grey";
    pincel.fillRect(100,0,5,250);
}
function tercerEstado(){
    segundoEstado();
    pincel.fillStyle = "grey";
    pincel.fillRect(100,0,140,5);
}
function cuartoEstado(){
    tercerEstado();
    pincel.fillStyle = "grey";
    pincel.fillRect(240,0,5,50);
    
}
/**
 brazoIzquierdo(242,100);
    brazoDerecho(242,100);
    piernaDerecha(242,100);
    piernaIzquierda(242,100);
    tronco(242,100);
    
*/
function quintoEstado(text){
    cuartoEstado();
    cabeza(245,75,25);
}
function gano(text){
    escrito(110,225,"GANASTE!!!","green");  
}


function cabeza(x,y,radio){
    pincel.fillStyle = "grey";
    pincel.beginPath();
    pincel.arc(x,y,radio,0,2*Math.PI);
    pincel.fill();

    pincel.fillStyle = "white";
    pincel.beginPath();
    pincel.arc(x,y,radio-5,0,2*Math.PI);
    pincel.fill();


}
function tronco(x,y){
    pincel.fillStyle = "grey";
    pincel.fillRect(x,y,5,75);
}
function brazoIzquierdo(x,y){
    cabeza(x,y);
    pincel.fillStyle = "grey";
    pincel.moveTo(x+3,y);
    pincel.lineTo(x+3,y+8);
    pincel.lineTo(x-22,y+50);
    pincel.lineTo(x-22,y+42);
    pincel.fill();
    
}
function brazoDerecho(x,y){
    pincel.fillStyle = "grey";
    pincel.moveTo(x+2,y);
    pincel.lineTo(x+2,y+8);
    pincel.lineTo(x-22+derecha,y+50);
    pincel.lineTo(x-22+derecha,y+42);
    pincel.fill();
}
function piernaIzquierda(x,y){
    pincel.fillStyle = "grey";
    pincel.moveTo(x+3,y+abajo);
    pincel.lineTo(x+3,y+8+abajo);
    pincel.lineTo(x-22,y+50+abajo);
    pincel.lineTo(x-22,y+42+abajo);
    pincel.fill();
}
function piernaDerecha(x,y){
    pincel.fillStyle = "grey";
    pincel.moveTo(x+2,y+abajo);
    pincel.lineTo(x+2,y+8+abajo);
    pincel.lineTo(x-22+derecha,y+50+abajo);
    pincel.lineTo(x-22+derecha,y+42+abajo);
    pincel.fill();
}

function escrito(x,y,texto,color){
    var p = texto;
    pincel.fillStyle = color;
    pincel.font="bold 20px arial"; //estilo de texto
    pincel.fillText(p,x,y);
}