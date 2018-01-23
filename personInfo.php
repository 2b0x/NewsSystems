<?php

	session_start(); 
	$username = $_SESSION['username']; 
	$userid = $_SESSION['userid']; 
	$userpic = $_SESSION['userpic'];
	$useremail = $_SESSION['email'];
	$userphone = $_SESSION['phone'];  
    $userschool = $_SESSION['school'];
     
      
	
	
	
	
	include('personInfo.html');
	
	
	echo '<script> $("select option[value=' . $userschool . ']").attr("selected",true);  </script>';
	
	
?>