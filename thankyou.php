<!DOCTYPE html>
<!-- 
Assignment Name: ACE IN THE HOlE
File Name: thankyou.php
Date: 1.29.18
Programmer: Alexandra Nitsche
-->
<html lang="en">
<body>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8">

    <title>ACE IN THE HOLE EVENTS</title>
    
    <link href="styles/reset.css" rel="stylesheet" type="text/css">
    <link href="styles/generic.css" rel="stylesheet" type="text/css">
    <link href="styles/styles.css" rel="stylesheet" type="text/css">
</head>

<body>
<div class="logo">
    <header>
      <a href="index.html"><img src="images/logo.png" alt="Logo"></a>  
    <h1><br>ACE IN THE HOLE</h1>
    </header>
</div>
    
<div class="topnav" id="myTopnav">
    <a href="index.html" class="active">Home</a>
    <a href="events.html">Events</a>
    <a href="about.html">About</a>
    <a href="registration.html">Registration</a>
    <a href="contact.html">Contact</a>
    <a href="faq.html"> FAQ</a>
    <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
</div>

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
    
        <footer>
        <h2>Follow Us On Social to See Why Everyone Loves Pull-Over Pet</h2>
        <img src="images/instagrampaw.jpg" alt="instagram" height="75" width="75">
        <img src="images/facebookpaw.jpg" alt="facebook" height="75" width="75">

    </footer>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="scripts/nav.js"></script>
</body>
</html>
