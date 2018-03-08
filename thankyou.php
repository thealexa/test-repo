<!DOCTYPE html>
<!-- 
Assignment Name: ACE IN THE HOlE
File Name: thankyou.php
Date: 1.29.18
Programmer: Alexandra Nitsche
-->
<html lang="en">
<body>

  <?php  
    $name= $_POST["name"];
        
    $email= $_POST["email"];
    
    $phone= $_POST["phone"];
    
    $emername= $_POST["emername"];
    
    $emerphone= $_POST["emerphone"];
        
    $status= $_POST["status"];
    
    $satevents= $_POST["satevents"];
    
    $sunevents= $_POST["sunevents"];
    
    
     //connecting to DB
    include_once "includes/connection.php";
    
    //inserting form data to database
    
    $sql="INSERT INTO registration(name, email, phone, emername, emerphone, status, satevents, sunevents)"
     . " VALUES('$name', '$email', '$phone', '$emername', '$emerphone', '$status', '$satevents', '$sunevents');"; 
    
    //
try { 
    $result = $connection->query($sql);
     echo "3. Query succeeded! The new record was added.<br>";
    }
catch (PDOException $e) {
    die("3. Query Failed! " . $e->getMessage());
}?>

    Thank you for contacting us, <?php echo $_POST["name"]; ?><br>
We will get back to you as soon as we can.

</body>
</html>