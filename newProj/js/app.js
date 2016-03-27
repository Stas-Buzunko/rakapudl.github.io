$(function() {

  $('.slider1').mobilyslider();

  $('.slider2').mobilyslider({
    transition: 'horizontal',
    animationSpeed: 500,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    bullets: false
  });

  $('.slider3').mobilyslider({
    transition: 'fade',
    animationSpeed: 500,
    autoplay: true,
    autoplaySpeed: 10000,
    bullets: true,
    pauseOnHover: true,
    arrowsHide: false
  });

  $('.slider4').mobilyslider({
    transition: 'fade',
    animationSpeed: 500,
    autoplay: false,
    autoplaySpeed: 60000,
    bullets: false,
    pauseOnHover: true,
    arrowsHide: false
  });

});
