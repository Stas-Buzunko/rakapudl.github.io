<?php $connect = mysql_connect('mysql.hostinger.com.ua','u707227932_wind','I5JZBTpatk') or die('Подключение к базе данных не возможно <b><u>'.mysql_error()."</b></u>");


    mysql_select_db('u707227932_names',$connect) or die('Подключение к базе данных не возможно <b><u>'.mysql_error()."</b></u>");
    @mysql_query("SET NAMES 'cp1251'");

        if($_POST){
            $name = $_POST['name'];
            mysql_query("INSERT INTO Names(Name)
            VALUE('$name')");
            }
        ?>