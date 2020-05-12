<?php
header('Content-Type: application/json');

   include "database.php";
       // salvo il primo array
      $data = $graphs["fatturato"];



echo json_encode($data);
