$(document).ready(function(){
    var divs = $(".divs");
    var links= $(".links");
    var titulo= $("#titulo")
    var boton = $("#boton") 
    var boton2 = $("#boton2")
    var sub= $("#subtitulo")

    titulo.mouseenter(function(){
        $(this).fadeTo("fast",0.5);
    
    });

    boton.click(function(){
        divs.hide()

    });


    divs.mouseenter(function(){
      $(this).css("background", "black");

    });


    boton2.click(function(){
        sub.text("Los perritos más hermosos del mundo");


    

    });


    });











