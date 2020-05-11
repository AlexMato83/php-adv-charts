<?php
header('Content-Type: application/json');

   include "database.php";
       // salvo il primo array
      $prova = $graphs["fatturato"];
    


echo json_encode($prova);
