if ($('.project__slider').length) {

    $('.project__slider').each(function(index) {
      var $this = $(this);
      $this.addClass('project-slider-' + index)

      var project__slider = new Swiper('.project-slider-' + index, {
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
          let currentNumber = $('.project-slider-' + index +  ' .current-slide-number');
          let lastNumber = $('.project-slider-' + index +  ' .last-slide-number');

          currentNumber.html(project__slider.realIndex +  1);
          lastNumber.html(project__slider.slides.length);
      }

      changeNumber();

      $('.project__slider .swiper-button-prev, .project__slider .swiper-button-next').on('click', changeNumber);

    });

}