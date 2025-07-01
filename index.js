$(document).ready(function () {
    $('#buttonAbout').click(function () {
    const destino = $('#aboutUs');

    $('html').animate({
        scrollTop: destino.offset().top
    }, 2000)
})

})