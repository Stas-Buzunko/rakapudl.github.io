<!DOCTYPE html>
<title>Форма</title>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />

<?php
$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: Subject <bot/>\r\n";
require('mail.php');

	$result = mail($mail, "Заказ",
		"Телефон: $_POST[phone] \n
		", $headers);

if ($result)
	echo '<script language="javascript">location.href="http://'.$_SERVER['SERVER_NAME'].'/thank_you"</script>';
?>
