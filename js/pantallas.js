
pantalla_uno = document.querySelector(".pantalla-uno");
pantalla_dos = document.querySelector(".pantalla-dos");
pantalla_tres = document.querySelector(".pantalla-tres");



function pantalla(numero){
    //escoge entre pantallas 
    if (numero == 1) {
        pantalla_uno.style.display = "block";
        pantalla_dos.style.display = "none";
        pantalla_tres.style.display = "none";
    }
    if (numero == 2) {
        pantalla_uno.style.display = "none";
        pantalla_dos.style.display = "block";
        pantalla_tres.style.display = "none";
    }
    if (numero == 3) {
        pantalla_uno.style.display = "none";
        pantalla_dos.style.display = "none";
        pantalla_tres.style.display = "block";
    }
}