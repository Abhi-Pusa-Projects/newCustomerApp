<?php
      $data = json_decode(file_get_contents('php://input'), true);

      //item extraced from the json data
      $itemname = data['itemName'];
      $itemPrice= data['itemPrice'];
      $itemQuantity = data['itemQuantity'];
      $totalPrice = data['totalPrice'];

      //connection details for the database
      $dbHost="localhost";
      $dbname="test";
      $dbUser="appuser";
      $dbPass="newappuser";

      try {
        //connection to the database to execute the query
        $conn = new PDO("mysql:host={$dbHost};dbname={$dbname}",$dbUser,$dbPass);
        $sql="INSERT INTO solditems(itemName,itemPrice,itemQuantity,totalPrice)
              VALUES('$itemName','$itemPrice','$itemQuantity','$totalPrice');";
        $query= $conn->prepare($sql);
        $result=$query->execute();
        if($result){
          //if data inserted will return success message to client
          echo true;
        }
        else{
          //if data is not inserted will return unsuccessful message to database
          echo false;
        }

      } catch (PDOException $e) {
        echo "error in adding data into database";
        echo $e->getMessage();
      }
      ?>
