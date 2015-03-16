<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Name Randomizer</title>
    <script src = "js/names.js"></script>
    <link rel="stylesheet" href="switchery-master/dist/switchery.css" />
    <link rel="stylesheet" href="css.css" type="text/css" />
    <script src="switchery-master/dist/switchery.js"></script>
    <script src = "js/randomizer.js"></script>
    <script src="js/jquery.min.js"></script>
</head>
<body>
    
<input id = "div1" disabled>
<button id = "button" onclick = click1();>ГЕНЕРИРОВАТЬ</button>
<div class="block">
    <input type="checkbox" class="js-switch" checked/>
    <div class="check-change js-check-change-field">Два имени</div>
</div>

<div class="add-block">
    <button class="add">Добавить имя</button>
     <div class="hidden" hidden>
     <form action="" method="POST">
     <input type="text" name="as1">
     <button type="submit" name="submit">Добавить</button>
     	</form>
    </div> 
    
</div>
<script>
    var elem = document.querySelector('.js-switch');
    var init = new Switchery(elem);

    var changeCheckbox = document.querySelector('.js-switch')
            , changeField = document.querySelector('.js-check-change-field');

    changeCheckbox.onchange = function() {
        if(changeCheckbox.checked === true){
            changeField.innerHTML = "Два имени";
        }else{
            changeField.innerHTML = "Одно имя";
        }
    };

   var div = document.getElementById("div1");
    var click1 = function() {

        result(names);

    };

    $(".add").click(function() {
    	$(".hidden").slideToggle("fast");
    });

</script>

<?php
    if( isset( $_POST['submit'] ) )
{
        $s = implode($_POST); 
        $f = fopen("names.txt","a"); 
        flock($f, LOCK_EX); 
        fputs($f, $s."\n"); 
        flock($f, LOCK_UN); 
        fclose($f); 
};
    ?>

</body>
</html>