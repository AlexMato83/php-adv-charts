<?php
header('Content-Type: application/json');

   include "database.php";
   $numeri = $data["data"];
   foreach ($numeri as $numero) {

      echo $numero;
   }

echo json_encode($data);
