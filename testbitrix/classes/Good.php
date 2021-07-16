<?php

      
       //создаем класс
  class Good  
  {
    public static $goods; 

    static function getAllGoods()
    {
        

      if ( static::$goods == null) {
        echo "сходили в базу";
        $request = "SELECT * FROM testbitrix";

        $arResult = mysqli_query(Connect::getConnection(),$request); 
        
        // получаем все строки в цикле по одной
        $goods = [];
        while($row = $arResult->fetch_assoc()) {
          $goods[] = $row; 
        }
        static::$goods = $goods;
      }
      return static::$goods;   
    } 

    static function getUpdates()
    {
      static::$goods = null;
      static::getAllGoods();
    }
  }

            

        
