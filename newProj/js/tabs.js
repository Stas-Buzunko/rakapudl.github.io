var tab = $(".tab");
var tabBtn = $(".openTab");
tab.hide();
tabBtn.click(function(){
  $( this ).next(tab).toggle('ease');
});
