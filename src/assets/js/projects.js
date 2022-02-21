if ($('.project__slider').length) {
    let project__slider = new Swiper('.project__slider', {
      direction: 'horizontal',
      slidesPerView: 1,

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },

      navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
      },

    });

    project__slider.on('slideChange', function () {
      changeNumber();
    });

    function changeNumber() {
        let currentNumber = $('.project__slider .current-slide-number');
        let lastNumber = $('.project__slider .last-slide-number');

        currentNumber.html(project__slider.realIndex +  1);
        lastNumber.html(project__slider.slides.length);
    }

    changeNumber();

    $('.project__slider .swiper-button-prev, .project__slider .swiper-button-next').on('click', changeNumber);
}