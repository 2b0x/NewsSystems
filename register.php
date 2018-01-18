<?php
		require('conn.php');

		if(empty($_POST)){
			require('register.html');
		}else{
			$nameTag = time();
			$filename = $nameTag . '0' . substr($_FILES['photo']['name'], strrpos($_FILES['photo']['name'],'.'));  
			$response = array();
			$path = "img/personPic/"  . $filename;  
			$user_name = $_POST['name'];
			$user_email = $_POST['email'];
			$user_phone = $_POST['phone'];
			$user_school = $_POST['school'];
			$password = $_POST['password'];
			
			if(move_uploaded_file($_FILES['photo']['tmp_name'], $path) ){
				$sqlstr = "insert into user(uname,email,phone,password,school,photo) values('".$user_name."','".$user_email."','".$user_phone."','".$password."','".$user_school."','".$path."')"; 
				@mysql_query($sqlstr) or die(mysql_error());  
			}else{  
			    $response['isSuccess'] = false;  
			}  
//			echo '<p><img src="' . $path .'" width="150"></p>'; 
			Header("Location: login.php"); 
			exit();  
		}



		
		


?>  

