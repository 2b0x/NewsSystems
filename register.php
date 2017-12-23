<?php
		require('conn.php');

		if(empty($_POST)){
			require('register.html');
		}else{
			  
			$image = mysql_real_escape_string(file_get_contents($_FILES['photo']['tmp_name']));  
			$image_type = $_FILES['photo']['type']; 
			$user_name = $_POST['name'];
			$user_email = $_POST['email'];
			$user_phone = $_POST['phone'];
			$user_school = $_POST['school'];
			$password = $_POST['password'];

//			 $sqlstr = "insert into user(uname,email,phone,password,school,photo,type) values('".$user_name."','".$user_email."','".$user_phone."','".$password."','".$user_school."','".$image."','".$image_type."')";  
			  
//			 @mysql_query($sqlstr) or die(mysql_error());  
    		// header('location:login.php');  
			echo '<p><img src="getImage.php?action=show&id=51" width="150"></p>'; 
			exit();  
			
		}


		
		


?>  

