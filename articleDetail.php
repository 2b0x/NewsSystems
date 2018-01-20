<?php
	require('conn.php');
	
	$artId = $_GET[artId];

	$sql = "SELECT * FROM article WHERE id='" . $artId . "'";//mysql查询语句  

	$rs = mysql_query($sql) or die ("查询失败"); 
	$data = array(); 
	while($row = mysql_fetch_array($rs)){  
	    $data[] = $row;  //传值给一个数组  
	} 
	$datas = array();
	$length=count($data);
	for($i=0;$i<$length;$i++){	
		$datas[$i][id] = $data[$i][id];
		$datas[$i][title] = $data[$i][title];
		$datas[$i][content] = $data[$i][content];
		$datas[$i][type] = $data[$i][type];
		$datas[$i][date] = $data[$i][date];
	}
	
	mysql_close();

	$type = ['','国家政策','院校政策','考研资讯','学习方法'];
	
	include('articleDetail.html');
?>