$(document).ready(function() {
    $('#search').click(function() {
        $('form').addClass('open');
        $('ul').addClass('search');
        $('#search-input').addClass('search-input');
        $('#search-btn').addClass('search-btn');

    });
    $('#search-btn').click(function() {
        $('form').removeClass('open');
        $('ul').removeClass('search');
        $('#search-input').removeClass('search-input');
        $('#search-btn').removeClass('search-btn');
    });
    $('.one-title').click(function() {
        $('svg').toggleClass('svg');
    });
    $('.two-title').click(function() {
        $(' svg').toggleClass('svg')
    });
    $('.three-title').click(function() {
        $(' svg').toggleClass('svg');
    });
    // mediaa
    $('.toggle').click(function() {
        $('ul').toggleClass('active');
        $('.slide-bar').addClass('active');
        $('.toggle').addClass('active')
    });
    $('.close-nav').click(function() {
        $('.slide-bar').removeClass('active');
        $('.toggle').removeClass('active')
    });
    $("#close-search").click(function() {
        $(' #close-search').addClass('hide');
        $(' #search-input').addClass('show-search');
        $('#close-btn').addClass('close-show');
        $('form').addClass('show-close');
    });
    $("#close-btn").click(function() {
        $(' #close-search').removeClass('hide');
        $(' #search-input').removeClass('show-search');
        $('#close-btn').removeClass('close-show');
        $('form').removeClass('show-close');
    });
    // loader
    $(window).on("load", function() {
        $(".loader").fadeOut(1000, function() {
            $(this).remove()
        });
    });
});

// loader