$('.pagination img').click(function(){
  var src = $(this).attr("src");
  $(".img-modal").css("background", "url(" + src + ") center center");
  $(".modal").fadeIn('ease');
});

$('.modal').click(function(){
  $(this).fadeOut('ease');
});
