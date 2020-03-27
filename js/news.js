$(window).ready(function() {
    $(".item").mouseover(function() {
        $(this).css('box-shadow', '0px 5px 5px 5px rgba(0, 0, 0, 0.57)')
    });
    $(".item").mouseout(function() {
        $(this).css('box-shadow', '')
    });
})