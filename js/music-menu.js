$(window).ready(function() {
    $('.styles').mouseover(function() {
        $(this).css('opacity', '1');
    });
    $('.styles').mouseout(function() {
        $(this).css('opacity', '0.7');
    });

    $('.bands').mouseover(function() {
        $(this).css('opacity', '1');
    });
    $('.bands').mouseout(function() {
        $(this).css('opacity', '0.7');
    });
})