$(document).ready(function() {

    $('#submit').on('click', function(e) {
        if ($('#phone').val().length < 18) {
            e.preventDefault();
            $('#phone').next().fadeIn(100);
        } else {
            $('#phone').next().fadeOut(100);
        }
    });

    $('#submit').on('click', function(e) {
        if ($('#name').val() == '') {
            e.preventDefault();
            $('#name').next().fadeIn(100);
        } else {
            $('#name').next().fadeOut(100);
        }
    });

    $('#callbackBtn').on('click', function(e) {
        e.preventDefault();
        $('.popup-layer, .popup-container').addClass('opened');
        $('body').addClass('popup-opened');

        if ($(window).width() < 1024) {
            $(window).scrollTop(0);
        }
    });

    $('.popup-close').on('click', function(e) {
        e.preventDefault();
        $('.popup-layer, .popup-container').removeClass('opened');
        $('body').removeClass('popup-opened');
    });

    $('html').click(function(e) {
        if (!$(e.target).closest('.popup').length && !$(e.target).closest('.callback-btn').length) {
            $('.popup-layer, .popup-container').removeClass('opened');
            $('body').removeClass('popup-opened');
            $('.popup').removeClass('hide');
            $('.popup-success').addClass('hide');
          }
    });

    $('.popup-success a.button-style').on('click', function(e) {
        e.preventDefault();
        $('body').removeClass('popup-opened');
        $('.popup-layer, .popup-container').removeClass('opened');
        $('.popup').toggleClass('hide');
    });

})