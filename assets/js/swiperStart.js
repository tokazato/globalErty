// main slider
var galleryThumbs = new Swiper('.mainSliderThumbs', {
    spaceBetween: 10,
    slidesPerView: 3,
    // loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
  var galleryTop = new Swiper('.mainSliderTop', {
    spaceBetween: 10,   
    slidesPerView: 1,
    autoplay: {
        delay: 2000,
    },
    loop:true,
    // loopedSlides: 5, //looped slides should be the same
    navigation: {
      nextEl: '.mainSliderRight',
      prevEl: '.mainSliderPrev',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
});



// footer slider 

var swiper = new Swiper('.footerSlider', {
    slidesPerView: 6,
    spaceBetween: 30,
    navigation: {
        nextEl: '.footer-slider-next',
        prevEl: '.footer-slider-prev',
    },
    breakpoints: {
        // when window width is <= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window width is <= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is <= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        840: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        1040: {
            slidesPerView: 5,
            spaceBetween: 30
        }
      }
  });