$(document).ready(function(){
  $('.header .header-slider_inner').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: false,
    dots: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear'
  });

  $('.offers .slider-inner').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1
  });
});
