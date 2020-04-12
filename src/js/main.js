$(function () {

  //SLIDER 

  $(".slider__main").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    asNavFor: ".slider-nav",
  });

  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    focusOnSelect: true,
    easing: true,
    vertical: true,
    asNavFor: ".slider__main",
  });

  //SLIDER END
  // SELECT

  if (document.querySelector(".language-switch")) {
    $(document).ready(function () {
      $(".language-switch").select2();
    });
  }

  // SELECT END
  // BURGER MENU ===>

  $(".burger").on("click", function (e) {
    e.preventDefault();
    $(".slider-nav__img").toggleClass("slider__img--disable");
    $(".menu__list").toggleClass("menu__list--active");
    $(".burger").toggleClass("burger--fade"); 

    $(document).mouseup(function (e) {
      let div = $(".menu__item");
      if (!div.is(e.target) && div.has(e.target).length === 0) {
        $(".menu__list").removeClass("menu__list--active");
        $(".burger").removeClass("burger--fade");
        $(".slider-nav__img").removeClass("slider__img--disable");
      }
    });
  });

  $(".menu__link--close").on("click", function (e) {
    e.preventDefault();
    $(".menu__list").toggleClass("menu__list--active");
    $(".burger").toggleClass("burger--fade");
    $(".slider-nav__img").toggleClass("slider__img--disable");
  });

  // END BURGER MENU <===
});
