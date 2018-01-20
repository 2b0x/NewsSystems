<?php

	require('conn.php');//连接数据库
	
	
	//查询倒计时
	$CDsql = "SELECT countTime FROM countDown WHERE id=1";  
	$CDrs = mysql_query($CDsql) or die ("查询失败"); 
	$CDrow = mysql_fetch_array($CDrs);
	$countTime = $CDrow[countTime];
	mysql_free_result($CDrs); //清除倒计时结果集
	mysql_close(); //关闭数据库连接
	
	session_start(); 
	$username = $_SESSION['username']; 
	$userid = $_SESSION['userid']; 
	$userpic = $_SESSION['userpic'];
	
	

	
	include('index.html');
?>