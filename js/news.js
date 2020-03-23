$(window).ready(function() {
    let owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 3,
        margin: 10,
        loop: true,
        nav: true,
        // autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 2000,
        animateOut: 'fadeOut'
    });
    $('.navbar-item').mouseover(function() {
        $(this).addClass('animated pulse faster')
    });
    $('.navbar-item').mouseout(function() {
        $(this).removeClass('animated pulse faster')
    });
});