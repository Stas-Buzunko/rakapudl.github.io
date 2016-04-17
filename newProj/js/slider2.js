$("body > div.container > div.stock > div > div.sliderBullets > g:nth-child(1)").click(function() {
  $(".slide02").fadeOut();
  $(".slide03").fadeOut();
  $(this).addClass("active");
  $("body > div.container > div.stock > div > div.sliderBullets > g:nth-child(2)").removeClass("active");
  $("body > div.container > div.stock > div > div.sliderBullets > g:nth-child(3)").removeClass("active");
  $(".slide01").fadeIn();
});

$("body > div.container > div.stock > div > div.sliderBullets > g:nth-child(2)").click(function() {
  $(".slide01").fadeOut();
  $(".slide03").fadeOut();
  $(this).addClass("active");
  $("body > div.container > div.stock > div > div.sliderBullets > g:nth-child(1)").removeClass("active");
  $("body > div.container > div.stock > div > div.sliderBullets > g:nth-child(3)").removeClass("active");
  $(".slide02").fadeIn();
});

$("body > div.container > div.stock > div > div.sliderBullets > g:nth-child(3)").click(function() {
  $(".slide01").fadeOut();
  $(".slide02").fadeOut();
  $(this).addClass("active");
  $("body > div.container > div.stock > div > div.sliderBullets > g:nth-child(1)").removeClass("active");
  $("body > div.container > div.stock > div > div.sliderBullets > g:nth-child(2)").removeClass("active");
  $(".slide03").fadeIn();
});
