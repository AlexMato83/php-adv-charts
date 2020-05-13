<?php
  header('Content-Type: application/json');

  include "database.php";
  // salvo il secondo array
  $data = $graphs['fatturato_by_agent'];
  // stampo il tipo di grafico
  $type = $data[type];

  // salvo l'array che contiene dati ed etichette
  $data = $data[data];
  // salvo i nomi cioè le chiavi
  $labels = array_keys($data);
  // salvo i numeri cioè i valori
  $numeri = array_values($data);
  // creo e salvo l'array con i varii oggetti
  $results = [$type, $labels, $numeri];

  echo json_encode($results);
?>
