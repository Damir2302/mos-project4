if ($('.awards__slider').length) {
    let awards__slider = new Swiper('.awards__slider', {
      direction: 'horizontal',
      freeMode: true,
      slidesPerView: 2.4,
      spaceBetween: 100,

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },

      navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
      },

    });

    awards__slider.on('slideChange', function () {
      changeNumber();
    });

    function changeNumber() {
        let currentNumber = $('.awards__slider .current-slide-number');
        let lastNumber = $('.awards__slider .last-slide-number');

        currentNumber.html(awards__slider.realIndex +  1);
        lastNumber.html(Math.ceil(awards__slider.slides.length - 1.6));
    }

    changeNumber();

    $('.awards__slider .swiper-button-prev, .awards__slider .swiper-button-next').on('click', changeNumber);
  }

////////////////////
/// ARCHIVE SLIDER
////////////////////

let item_cart_pagination;

if ($('.swiper-item-pagination--first').length) {
    item_cart_pagination = new Swiper('.swiper-item-pagination--first', {
      spaceBetween: 10,
      slidesPerView: 7,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        470: {
          spaceBetween: 15
        }
      }
  });
}

let item_cart;

if ($('.swiper-item--first').length) {
    item_cart = new Swiper('.swiper-item--first', {
      slidesPerView: "auto",
      centeredSlides: true,
      slidesPerView: 1,
      thumbs: {
        swiper: item_cart_pagination,
      },
  });
}

let item_cart_pagination_second;

if ($('.swiper-item-pagination--second').length) {
    item_cart_pagination = new Swiper('.swiper-item-pagination--second', {
      spaceBetween: 10,
      slidesPerView: 7,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        470: {
          spaceBetween: 15
        }
      }
  });
}

let item_cart_second;

if ($('.swiper-item--second').length) {
    item_cart = new Swiper('.swiper-item--second', {
      slidesPerView: "auto",
      centeredSlides: true,
      slidesPerView: 1,
      thumbs: {
        swiper: item_cart_pagination,
      },
  });
}
