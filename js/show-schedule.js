$(window).ready(function() {
    $(".show").removeClass(".hidden").addClass('animated zoomIn 1s visible');
    $(".month").removeClass(".hidden").addClass('animated zoomIn 1s visible');

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