
       function mostrar_ocultar(info){
           let mensaje = document.getElementById(info);
           
           if(mensaje.style.display == "none"){
            document.getElementById(info).style.display= "block"
           }
           else{
               document.getElementById(info).style.display= "none"
           }
       }