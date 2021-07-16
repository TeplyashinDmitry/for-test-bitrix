<?php 

class Connect {

        public static function getConnection () {
             //создаю ключ для подключения к БД
             $link = mysqli_connect('localhost','f0418950','malmkxbt0410','f0418950_eshop');
                                    
             //точим ключ-создаем кодировку
             mysqli_set_charset($link,'utf8');
             
             return $link;
        }

}

?>