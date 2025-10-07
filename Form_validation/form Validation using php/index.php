<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Registration Form</title>
   
</head>
<body>
    <div class="form-container">
        <h1>Registration Form</h1>
        <form action="">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter Your Name" required>

            <label for="address">Address:</label>
            <textarea id="address" name="address" placeholder="Enter Your Address" required></textarea>

            <label for="dob">DOB:</label>
            <input type="date" id="dob" name="dob" required>

            <label>Gender:</label>
            <div class="gender-group">
                <input type="radio" id="female" name="gender" value="female" required>
                <label for="female">Female</label>

                <input type="radio" id="male" name="gender" value="male">
                <label for="male">Male</label>

                <input type="radio" id="other" name="gender" value="other">
                <label for="other">Other</label>
            </div>

            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" maxlength="10" placeholder="Enter Phone Number" required>

            <label for="email">Email ID:</label>
            <input type="email" id="email" name="email" placeholder="Enter Email" required>

            <button type="submit">Submit</button>
        </form>
    </div>
    <?php
     echo "<h2>Your Input:</h2>";
     echo $name;    
        echo "<br>";
    echo $address;
        echo "<br>";
    echo $dob;
        echo "<br>";
    echo $gender;
        echo "<br>";
    echo $phone;
        echo "<br>";
    echo $email;
    ?>
</body>
</html>
