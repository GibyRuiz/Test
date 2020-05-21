var input1 = document.getElementById("prueba");
var input2 = document.getElementById("prueba2");
var input3 = document.getElementById("prueba3");
var input4 = document.getElementById("prueba4");
var input5 = document.getElementById("prueba5");
var input6 = document.getElementById("prueba6");

input1.addEventListener("click", () => {input2.checked = false;}, false);
input2.addEventListener("click", () => {input1.checked = false;}, false);
input3.addEventListener("click", () => {input4.checked = false;}, false);
input4.addEventListener("click", () => {input3.checked = false;}, false);
input5.addEventListener("click", () => {input6.checked = false;}, false);
input6.addEventListener("click", () => {input5.checked = false;}, false);


var botonComprobar = document.getElementsByTagName("button")[0];
botonComprobar.addEventListener("click", comprobar, false);

function comprobar(){
if(input2.checked == true && input3.checked == true && input5.checked == true){

     botonComprobar.innerHTML = "CORRECTO!!";
}

else if(input2.checked == false || input3.checked == false || input5.checked == false){

    botonComprobar.innerHTML = "INCORRECTO!!";

}



}