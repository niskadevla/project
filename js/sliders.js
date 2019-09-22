$(document).ready(function(){

  const $desktopWidth = 1199.98;
  const $smDesktopWidth = 991.98;
  const $tableWidth = 767.98;
  const $phoneWidth = 575.98;
  const $smPhoneWidth = 319.98;

  function getScreenWidth() {
    let clientWidth = Math.min( (document.documentElement.clientWidth || document.body.clientWidth), screen.availWidth );

    return clientWidth;
  }

  function slidesAmount() {
    let slidesAmount = 1;
    clientWidth = getScreenWidth();

    if (clientWidth > $smDesktopWidth) {
      slidesAmount = 3;
    } else if (clientWidth > $phoneWidth) {
      slidesAmount = 2;
    } else slidesAmount = 1;

    return slidesAmount;
  }

  //Header slider
    $('.header-slider_for').slick({
       autoplay: true,
       autoplaySpeed: 2500,
       pauseOnHover: false,
       slidesToShow: 1,
       slidesToScroll: 1,
       arrows: false,
       dots: true,
       fade: true,
       speed: 1500,
       asNavFor: '.header-slider_nav'
  });
  $('.header-slider_nav').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
     fade: true,
     speed: 1500,
     asNavFor: '.header-slider_for',
     focusOnSelect: true
  });

  //Offers slider
  let slidesToShow = slidesAmount();

  $('.offers-slider_inner').slick({
    autoplay: false,
    autoplaySpeed: 3000,
    lazyLoad: 'ondemand',
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    dots: false,
    arrows: true
  });
});
