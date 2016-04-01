var btn = $('.check');

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

    case 'МАТОВЫЕ':
    hideTabs();
    $('.un2').show('ease');
      break;

    case 'ТКАНЕВЫЕ':

      break;
  }
});
