var input1 = document.getElementById("prueba");
var input2 = document.getElementById("prueba2");
var input3 = document.getElementById("prueba3");
var input4 = document.getElementById("prueba4");
var input5 = document.getElementById("prueba5");
var input6 = document.getElementById("prueba6");
var input7 = document.getElementById("prueba7");
var input8 = document.getElementById("prueba8");
var input9 = document.getElementById("prueba9");
var input10 = document.getElementById("prueba10");

var muestraPuntaje = document.getElementById("puntaje");

input1.addEventListener("click", () => {input2.checked = false;}, false);
input2.addEventListener("click", () => {input1.checked = false;}, false);
input3.addEventListener("click", () => {input4.checked = false;}, false);
input4.addEventListener("click", () => {input3.checked = false;}, false);
input5.addEventListener("click", () => {input6.checked = false;}, false);
input6.addEventListener("click", () => {input5.checked = false;}, false);
input7.addEventListener("click", () => {input8.checked = false;}, false);
input8.addEventListener("click", () => {input7.checked = false;}, false);
input9.addEventListener("click", () => {input10.checked = false;}, false);
input10.addEventListener("click", () => {input9.checked = false;}, false);


var botonComprobar = document.getElementsByTagName("button")[0];
botonComprobar.addEventListener("click", comprobar, false);

function comprobar(){

var puntaje = 0;

if(input2.checked == true && input3.checked == true && input5.checked == true && input7.checked == true && input9.checked == true){

     botonComprobar.innerHTML = "CORRECTO!!";
     muestraPuntaje.innerHTML = "Puntaje: 5";
}

else {

    botonComprobar.innerHTML = "INCORRECTO!!";
    if(input2.checked == true){
        puntaje++;
    }

    if(input3.checked == true){
        puntaje++;
    }

    if(input5.checked == true){
        puntaje++;
    }

    if(input7.checked == true){
        puntaje++;
    }

    if(input9.checked == true){
        puntaje++;
    }

    muestraPuntaje.innerHTML = "Puntaje: " + puntaje;

}

}