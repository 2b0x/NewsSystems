<?php
	session_start(); 
	$username = $_SESSION['username']; 
	$userid = $_SESSION['userid']; 
	$userpic = $_SESSION['userpic'];
	
	include('headerNav.html');
?>