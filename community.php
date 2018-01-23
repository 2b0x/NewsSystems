<?php

	session_start();  
//	$userid = '0';
    $username = $_SESSION['username'];  
    $school = $_SESSION['school'];  
    $userid = $_SESSION['userid'];   
    $userpic = $_SESSION['userpic']; 
	
	

	
	include('community.html');
	
	
	
	
?>