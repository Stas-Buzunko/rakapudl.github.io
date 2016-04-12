var btn = $('.check');

var ugol = 200;
var truba = 400;
var svetilnik = 300;
var lustra = 500;

var mat = 550;
var satin = 550;
var glyanec = 575;
var cvetn = 650;

var descor = 1100;
var clipso = 1400;

var ustanovka = 550;
var sqPrice = 550;

var sqPrice2 = 1100;

var hideTabs = function() {
      $('.un1').hide('ease');
      $('.un2').hide('ease');
}


btn.click(function(){
  if($(this).hasClass('a')) {
      $('.a').removeClass('selected');
      $( this ).addClass('selected')
  } else if($(this).hasClass('b')) {
    $('.b').removeClass('selected');
    $( this ).addClass('selected')
  }


  var tabName = $( this ).text();



  switch(tabName) {
    case 'ПВХ':
    hideTabs();
    $('.un1').show('ease');
      break;

    case 'ТКАНЕВЫЕ':
    hideTabs();
    $('.un2').show('ease');
      break;

    case 'САТИН':
      sqPrice = satin;
      changePrice();
      break;

    case 'МАТ':
        sqPrice = mat;
        changePrice();
        break;
    case 'ГЛЯНЕЦ':
      sqPrice = glyanec;
      changePrice();
      break;

    case 'ЦВЕТНЫЕ':
        sqPrice = cvetn;
        changePrice();
        break;

    case 'МНОГОУРОВНЕВЫЕ':
        sqPrice = cvetn;
        changePrice();
        break;

    case 'ФОТОПЕЧАТЬ':
        sqPrice = cvetn;
        changePrice();
        break;

    case 'DESCOR':
        sqPrice2 = descor;
        changePrice();
        break;

    case 'CLIPSO':
        sqPrice2 = clipso;
        changePrice();
        break;
  }
});

$("#calc-square").val(20);
$("#calc-angles-quantity").val(4);
$("#calc-light-quantity").val(1);
$("#calc-truba-quantity").val(1);

var changePrice = function() {
  var form = $(this).closest("form");
  var priceBlock = form.siblings(".price-block").find(".price");
  var priceBlockCredit = form.siblings(".price-block").find(".js-price-credit");

  var otherPrice = $("#calc-angles-quantity").val() * ugol +  $("#calc-light-quantity").val() * svetilnik +   $("#calc-truba-quantity").val() * truba;
  var sum1 = $("#calc-square").val() * sqPrice + otherPrice;
  var sum2 = $("#calc-square").val() * sqPrice2 + otherPrice;
  $('.price').html("<span>" + sum1 + "</span>");
  $('.price-credit').html("<span>" + sum2 +  "</span>");

}

  $(".calc-form").find("input:text").on('input change', function() {
    changePrice();
});

changePrice();
