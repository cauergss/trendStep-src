$(document).ready(function () {
    $('#buttonAbout').click(function () {
        const aboutUsDest = $('#aboutUs');

        $('html').animate({
            scrollTop: aboutUsDest.offset().top
        }, 2000)
    })

    $('#check').click(function () {
        const checkNow = $('#newCatalogue');

        $('html').animate({
            scrollTop: checkNow.offset().top
        }, 2000)
    })

})