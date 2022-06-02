var swiper = new Swiper('.slider .swiper-container', {
    
    slidesPerView: 1,
    spaceBetween: 20,

    autoplay: {
        delay: 1000,
    },

    speed: 1000,
  });

  var swiper = new Swiper('.slider__roadmap .swiper-container__roadmap', {
    
    slidesPerView: 1,
    spaceBetween: 20,
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

    autoplay: {
        delay: 6000,
    },

    speed: 1000,
  });

  $(document).ready(function() {
    $("a.nav__item").click(function(){
      $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
        duration: 1000,
        easing: "swing"
      });
      return false;
    });
  });
