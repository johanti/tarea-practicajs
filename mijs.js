window.addEventListener('scroll' , function (){
    let altopantalla = window.innerHeight;
    console.log('alto pantalla' + altopantalla);

    let scrollRecorrido = document.documentElement.scrollTop;

    console.log('scroll recorrido' + scrollRecorrido);

    let listaDetalle = document.querySelectorAll(' article')

    listaDetalle.forEach(function(item, index, listado ){
        let alturaArticle = listado[index].offsetTop;
        console.log ('posicion superior' + index + '::' + alturaArticle);
        document.getElementById("imagen").src="";
        if ((alturaArticle*0.6)< scrollRecorrido){
            listado[index].style.opacity = '1';

        } else {
            listado[index].style.opacity = '0';
        }
    });
    })

    