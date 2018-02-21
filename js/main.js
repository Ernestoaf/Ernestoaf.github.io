$(document).ready(function () {
    //Menú hamburguesa
    $(".burger").click(function () {
        $(".menu").animate({ width: "toggle" }, 500);
    });
    $(".cerrar").click(function () {
        $(".menu").animate({ width: "toggle" }, 500);
    });


    //menu hamburguesa paginas normales
    $(".burger2").click(function () {
        $(".burger2").toggleClass("abierto");
        $(".menu2").animate({ width: "toggle" }, 1000)

        $(".menu2 a").toggleClass("aparicion"); // para que aparezcan en orden con una transicion
    });

    // Cambio de estilo segun scroll
    $(window).on("scroll", function () {
        var posicion = $("#primera").offset(); //almacenamos en la variable la poscion del elemto primera
        console.log(posicion);
        var barra = $(window).scrollTop();
        console.log(barra);
        if ($(window).scrollTop() > posicion.top - 50) { //scroll top coge la poscion de la ventana donde estas
            $("header").removeClass("blanco");
        }
        else {
            $("header").addClass("blanco");
        }
    });

    //Ventana modal
    // $("#open").click(function(){
    //     $(".modal").addClass("visible");
    // });
    //Ventana modal
    $("#open").click(function(){
        $(".modal, .overlay").addClass("visible");
        //para eliminar la clase transparente al hacer clic y evitar que el z-indez se superponga a los demas elementos
        // $(".transparente").removeClass("transparente");
    });

    //Añadiendo la clase overlay conseguimos que se cierre tambien pulsando fuera de la ventana
    $("#close, .overlay").click(function(){
        $(".modal, .overlay").removeClass("visible");
        // $(".transparente").addClass("transparente");
    });

    
    // Scroll suave
    $("a").on("click", function () { //on recibe uno o varios eventos
        if (this.hash !== "") { // hash es lo que esta al lado de almohadilla
            var hash = this.hash;
            $("html, body").animate({
                //objeto con propiedad y valor
                scrollTop: $(hash).offset().top
            }, 800);

            //sintacis de animate
            // animate({objeto}, duracion);
        }
    });

    // Cambio de estilo segun scroll
    $(window).on("scroll", function () {
        var posicion = $("#primera").offset(); //almacenamos en la variable la poscion del elemto primera
        console.log(posicion);
        var barra = $(window).scrollTop();
        console.log(barra);
        if ($(window).scrollTop() > posicion.top - 50) { //scroll top coge la poscion de la ventana donde estas
            $("header").removeClass("colornav");
        } else {
            $("header").addClass("colornav");
        }
    });
});
