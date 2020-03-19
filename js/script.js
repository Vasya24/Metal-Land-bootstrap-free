$(window).ready(function() {
    let owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 1,
        margin: 10,
        loop: true,
        nav: true
    });

    $('.navbar-item').mouseover(function() {
        $(this).addClass('animated pulse faster')
    });
    $('.navbar-item').mouseout(function() {
        $(this).removeClass('animated pulse faster')
    });
})