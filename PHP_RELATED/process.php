<?php
$conn=new mysqli("localhost","root","","college1");
if($conn -> connect_error){
    die("Connection Failed".$conn-> connect_error);
}
if($_SERVER["REQUEST_METHOD"]=="POST")
{
    $name=htmlspecialchars($_POST["name"]);
    $email=htmlspecialchars($_POST["email"]);

    if(!empty($name) && filter_var($email,FILTER_VALIDATE_EMAIL))
     {
        $sql="INSERT INTO users(name,email) values('$name','$email')";
        $result=$conn->query($sql);
        if($result==TRUE)
        {
            echo"<h2> Successfull !!</h2>";

        }
        else{
            echo "<h2>Error</h2>";
        }
        echo"<a href='index.html'>Go back</a>";
     }
     else{
        echo"Try Again !!";
     }

}
$conn->close();
?>

