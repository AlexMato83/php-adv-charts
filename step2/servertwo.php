<?php
header('Content-Type: application/json');

   include "database.php";
       // salvo il primo array
      $prova = $graphs['fatturato_by_agent'];
      $cane = $prova["data"];
      foreach ($cane as $key => $value) {
        echo $key;
        echo $value;
      }


echo json_encode($key);
