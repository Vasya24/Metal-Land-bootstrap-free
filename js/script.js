$(window).ready(function() {
    let owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 1,
        margin: 10,
        loop: true,
        nav: true,
        autoplay: true,
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
    $("tr").mouseover(function() {
        $(this).css({
            color: '#545454',
            cursor: 'pointer'
        })
    });
    $("tr").mouseout(function() {
        $(this).css({
            color: '#ffffff',
            cursor: 'default'
        })
    })
})

$(window).scroll(function() {
    if ($(window).scrollTop() > 80) {
        $(".show").removeClass(".hidden").addClass('animated flipInX 1s visible');
    };
})