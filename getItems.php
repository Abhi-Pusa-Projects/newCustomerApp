<?php
  //connection details for the database
  include('./deliverResponse.php');
  include('./dbConfig.php');

  try {
    $conn = new PDO("mysql:host={$dbHost};dbname={$dbname}",$dbUser,$dbPass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch (PDOException $e) {
    deliver_response(200,"Error in connnecting to database",$e->getMessage());
  }

  if(isset($_GET['name']))
  {
    $itemName = $_GET['name'];
    $sql="SELECT * FROM items WHERE LOWER(itemName) like LOWER(?)";
    $query=$conn->prepare($sql);
    $query->bindValue(1, "%$itemName%", PDO::PARAM_STR);
    $query->execute();
    $result = $query->fetchAll(PDO::FETCH_ASSOC);
  }
  else
  {
    $sql = "SELECT * FROM items";
    $item_arr = array();
    $result = $conn->query($sql);
  }

  $item_arr = array();
  foreach($result as $rows){
       $item_obj = array(
                        "itemName" => $rows['itemName'],
                        "itemPrice"=> $rows['itemPrice'],
                        "itemDesc" => $rows['itemDesc'],
                        "itemQuantity"=> $rows['itemQuantity'],
                        "itemType" => $rows['itemType'],
                        "itemStockQuan" => $rows['itemStockQuan'],
                        "itemBuyPrice" => $rows['itemBuyPrice'],
                        "itemSellPrice" => $rows['itemSellPrice']
                       );
       array_push($item_arr,$item_obj);
   }
  deliver_response(200,"items fetched",$item_arr);
?>
