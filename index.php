<?php
	
	
	
	require('conn.php');
	$sql = "SELECT countTime FROM countDown WHERE id=1";   //mysql查询语句  
	$rs = mysql_query($sql) or die ("查询失败"); 
	$row = mysql_fetch_array($rs);
	$countTime = $row[countTime];
//	echo $countTime;
	mysql_free_result($rs); //清除结果集
	mysql_close(); //关闭数据库连接

	
	include('index.html');
?>