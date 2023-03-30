$('#open-search').click(function(e) {
    e.preventDefault();
    $('.search-auto').addClass('open')
})


$('#close-search').click(function(e) {
    e.preventDefault();
    $('.search-auto').removeClass('open')
})


$('.mode-switch').click(function () {
    $('body').toggleClass('dark')
})
