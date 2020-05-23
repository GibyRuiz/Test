        var poligono = document.getElementById("poligono");
        var botonClick = document.getElementById("boton1");
        var botonOver = document.getElementById("boton2");
        var botonExit = document.getElementById("boton3");
        var botonDouble = document.getElementById("boton4");
        var botonSpace = document.getElementById("boton5");



        botonClick.addEventListener("click", eventoClick, false);
        botonOver.addEventListener("mouseover", eventoOver, false);
        botonExit.addEventListener("mouseleave", eventoExit, false);
        botonDouble.addEventListener("dblclick", eventoDoubleClick, false);




        function eventoClick(){

            poligono.innerHTML = "soy el evento click";
            poligono.style.height = "150px";
            poligono.style.background = "blue";


            if( poligono.style.width == "350px" || poligono.style.width == "1330px"){
                poligono.style.width = "100px";
                poligono.style.background = "blue";

            }

            if(poligono.style.borderRadius == "50%"){
                poligono.style.borderRadius = "0%"
                
            }
            
            
        }


        function eventoOver(){
            
            poligono.innerHTML = "soy el evento mouseOver";
            poligono.style.width = "350px";
            poligono.style.background = "red";
            poligono.style.height = "150px";
            if(poligono.style.borderRadius == "50%"){
                poligono.style.borderRadius = "0%"
                
            }

            
        }

        function eventoExit(){
            poligono.style.width = "1330px";
            poligono.innerHTML = "soy el evento mouseleave";
            poligono.style.background = "green";
            poligono.style.height = "150px";
            if(poligono.style.borderRadius == "50%"){
                poligono.style.borderRadius = "0%"
                
            }
        }

        function eventoDoubleClick(){
            poligono.style.borderRadius = "50%";
            poligono.style.height = "150px";
            poligono.style.background = "yellow";
            poligono.innerHTML = "soy el evento doubleClick";

        }

        document.onkeyup = tecla;

        function tecla(event){

            if(event.keyCode == 32){

                poligono.innerHTML = "soy la barra espaciadora";
                poligono.style.background = "pink";

            }

        }