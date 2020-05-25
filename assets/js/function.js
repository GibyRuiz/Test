var cuadradoRojo = document.getElementById("cuadroRojo");
var cuadradoNegro = document.getElementById("cuadroNegro");



var distanciaTop = 0;
var distanciaLeft = 0;


document.onkeydown = cursor;



function cursor(evento){
    var coordenadasCuadroRojo = cuadradoRojo.getBoundingClientRect();
    var coordenadasCuadroNegro = cuadradoNegro.getBoundingClientRect();


    var codigoCursor = evento.keyCode;

    if(codigoCursor == 40)
    {
        
        if(coordenadasCuadroRojo.bottom == coordenadasCuadroNegro.top && coordenadasCuadroRojo.right >= coordenadasCuadroNegro.left && 
        coordenadasCuadroRojo.left <= coordenadasCuadroNegro.right)
        {
            distanciaTop = distanciaTop - 20;
        }

        distanciaTop+= 10;
        cuadradoRojo.style.top = distanciaTop + "px";
        
        }

    else if(codigoCursor == 38)
    {
        
        if(coordenadasCuadroRojo.top == coordenadasCuadroNegro.bottom && coordenadasCuadroRojo.right >= coordenadasCuadroNegro.left && 
        coordenadasCuadroRojo.left <= coordenadasCuadroNegro.right)
        {
            distanciaTop = distanciaTop + 20;
        }

        distanciaTop-=10;
        cuadradoRojo.style.top = distanciaTop + "px";

    }

    else if(codigoCursor == 39)
    {
       
        if(coordenadasCuadroRojo.right == coordenadasCuadroNegro.left && coordenadasCuadroRojo.bottom >= coordenadasCuadroNegro.top && 
        coordenadasCuadroRojo.top <= coordenadasCuadroNegro.bottom)
        {
            distanciaLeft = distanciaLeft - 20;
        }

        distanciaLeft+=10;
        cuadradoRojo.style.left = distanciaLeft + "px";
      
    }

    else if(codigoCursor == 37)
    {
       
        if(coordenadasCuadroRojo.left == coordenadasCuadroNegro.right && coordenadasCuadroRojo.bottom >= coordenadasCuadroNegro.top && 
        coordenadasCuadroRojo.top <= coordenadasCuadroNegro.bottom)
        {
            distanciaLeft = distanciaLeft + 20;
        }

        distanciaLeft-=10;
        cuadradoRojo.style.left = distanciaLeft + "px";
    }

    
}

alert("FUNCIÓN DE COLISIÓN CON REBOTE: Lleva al cuadrado rojo hacia el cuadrado negro con el cursor y hazlos colisionar");