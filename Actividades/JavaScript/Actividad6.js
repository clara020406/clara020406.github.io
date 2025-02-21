function cambiarColor(){
    var colorAplicar=document.getElementById("color").value;

    var parrafos=document.querySelectorAll("p");

    for (var i=0 ; i < parrafos.length ; i++){
        parrafos[i].style.color =colorAplicar;
    }

}