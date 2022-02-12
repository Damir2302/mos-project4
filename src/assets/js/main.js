$(document).ready(function() {

  // HEADER
  $('.header__btn-mobile').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('opened');
    $('.header__nav').slideToggle();
  });

  // HERO SECTION SLIDER
  if ($('.hero__slider').length) {
    let hero_slider = new Swiper('.hero__slider', {
      direction: 'horizontal',

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },

      navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
      },

    });

    hero_slider.on('slideChange', function () {
      changeNumber();
    });

    function changeNumber() {
        let currentNumber = $('.hero-slider .current-slide-number');
        let lastNumber = $('.hero-slider .last-slide-number');

        currentNumber.html(hero_slider.realIndex +  1);
        lastNumber.html(hero_slider.slides.length);
    }

    changeNumber();

    $('.hero-slider .swiper-button-prev, .hero-slider .swiper-button-next').on('click', changeNumber);
  }


  // NEWS SECTION
  if ($('.news__block')) {
    let news_block = new Swiper('.news__block', {
      direction: 'horizontal',
      freeMode: true,
      slidesPerView: 2.1,
      spaceBetween: 10
    })
  }

});