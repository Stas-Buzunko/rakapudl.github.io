<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="utf-8">
    <title>Name Randomizer</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <script src = "js/names.js"></script>
	<script src = "js/penta.js"></script>
	<script src = "js/pentas.js"></script>
    <link rel="stylesheet" href="switchery-master/dist/switchery.css" />
    <script src="switchery-master/dist/switchery.js"></script>
    <script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
	<script src = "js/randomizer.js"></script>
</head>
<body style = "background-color:#f4f4ff;">
	<div style = "background-color: #f5f5dc; width: 300px;height:100px; -webkit-box-shadow: 0px 0px 3px 0px rgba(50, 50, 50, 1);
-moz-box-shadow:    0px 0px 3px 0px rgba(50, 50, 50, 1);
box-shadow:         0px 0px 3px 0px rgba(50, 50, 50, 1);">
		<h5 style = "margin:15px; ">Больше откровений в генератор откровений!</h5>
	<form class="text-center center-block" action="" method="POST" style = "margin-left: 30px"> 
<input type="text" name="as1"> 
<button type="submit" name="submit">ОК</button> 
</form> 
	</div>
<div class="text-center center-block"  style = "margin-top: 5%; width:650px; margin-left:0;"> 
	<h1> <?php 
if( isset( $_POST['rand'] ) )
{
	$slova = file('names.txt');
   	$slovo = trim($slova[array_rand($slova, 1)]);
   	echo $slovo; 
}
		?> </h1>
	<form action = "" method = "post">
    <input class="center-block" style = "position:relative; top: 80%" type = "submit" name ="rand">
	</form>
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

        result(nam, secn); 
    };
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