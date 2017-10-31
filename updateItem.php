<?php
      include('deliverResponse.php');
      include('dbConfig.php');
      header('Content-Type:application/json');
      $data = json_decode(file_get_contents('php://input'), true);

      //item extraced from the json data
      $itemName = $data['itemName'];
      $itemPrice= $data['itemPrice'];
      $itemDesc = $data['itemDesc'];
      $itemQuantity= $data['itemQuantity'];
      $itemType = $data['itemType'];
      $itemStockQuan = $data['itemStockQuan'];
      $itemBuyPrice = $data['itemBuyPrice'];
      $itemSellPrice = $data['itemSellPrice'];

      try {
        //connection to the database to execute the query
        $conn = new PDO("mysql:host={$dbHost};dbname={$dbname}",$dbUser,$dbPass);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql="UPDATE items set itemPrice=:itemPrice,itemDesc=:itemDesc,
              itemQuantity=:itemQuantity,itemType=:itemType,itemStockQuan=:itemStockQuan,
              itemBuyPrice=:itemBuyPrice,itemSellPrice=:itemSellPrice WHERE itemName=:itemName";

        $query= $conn->prepare($sql);
        $query->bindParam(':itemName', $itemName);
        $query->bindParam(':itemPrice', $itemPrice);
        $query->bindParam(':itemDesc', $itemDesc);
        $query->bindParam(':itemQuantity', $itemQuantity);
        $query->bindParam(':itemType', $itemType);
        $query->bindParam(':itemStockQuan', $itemStockQuan);
        $query->bindParam(':itemBuyPrice', $itemBuyPrice);
        $query->bindParam(':itemSellPrice', $itemSellPrice);

        $result=$query->execute();

        if($result){
          //if data inserted will return success message to client
          deliver_response(200,"data updated",true);
        }
        else{
          //if data is not inserted will return unsuccessful message to database
          deliver_response(200,"data not updated",false);
        }

      } catch (PDOException $e) {
          deliver_response(200,"error in adding data into database",$e->getMessage());
      }
?>
