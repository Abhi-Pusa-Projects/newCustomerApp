<?php
      include('deliverResponse.php');
      include('dbConfig.php');
      header('Content-Type:application/json');
      $data = json_decode(file_get_contents('php://input'), true);

      //item extraced from the json data
      $itemName = $data['itemTodelete'];
      try {
        //connection to the database to execute the query
        $conn = new PDO("mysql:host={$dbHost};dbname={$dbname}",$dbUser,$dbPass);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql="DELETE FROM items WHERE upper(itemName) = upper('$itemName')";
        $query= $conn->prepare($sql);

        $query->execute();
        $result = $query -> rowCount();

        if($result){
          deliver_response(200,"data deleted",true);
        }
        else{
          //if data is not inserted will return unsuccessful message to database
          deliver_response(200,"data not deleted",false);
        }

      } catch (PDOException $e) {
        deliver_response(400,"error in connecting to DB",$e->getMessage());
      }
?>
