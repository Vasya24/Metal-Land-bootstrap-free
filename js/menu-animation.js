window.onload = function() {

    $('.navbar-item').mouseover(function() {
        $(this).addClass('animated pulse faster')
    });
    $('.navbar-item').mouseout(function() {
        $(this).removeClass('animated pulse faster')
    });
}