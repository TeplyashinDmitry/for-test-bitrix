
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<?php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1); 


require_once($_SERVER['DOCUMENT_ROOT'].'/testbitrix/classes/connect.php');
require_once($_SERVER['DOCUMENT_ROOT'].'/testbitrix/classes/Good.php');


$result2 = Good::getAllGoods();

?>

   <?php print_r($result2);?>
   
</body>
</html>