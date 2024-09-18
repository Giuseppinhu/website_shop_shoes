$(document).ready(function() {
    $('.nav-about').on("click", function() {
        const destino = $('#about')

        $('html').animate({
        scrollTop: destino.offset().top 
        }, 1000)
    })

    $('.nav-products').on("click", function() {
        const destino = $('#products')

        $('html').animate({
        scrollTop: destino.offset().top 
        }, 1000)
    })
})