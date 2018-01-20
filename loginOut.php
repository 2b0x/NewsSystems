<?php

session_start();  
    unset($_SESSION['username']);  
    unset($_SESSION['email']);  
    unset($_SESSION['phone']);  
    unset($_SESSION['school']);  
    unset($_SESSION['userid']);  
    unset($_SESSION['userpic']);  
	 
	header("Location:index.php");
    exit;  

?>