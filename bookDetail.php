<?php
	require('conn.php');
	
	$bookId = $_GET[bookId];

	$sql = "SELECT * FROM book WHERE id='" . $bookId . "'";//mysql查询语句  

	$rs = mysql_query($sql) or die ("查询失败"); 
	$data = array(); 
	while($row = mysql_fetch_array($rs)){  
	    $data[] = $row;  //传值给一个数组  
	} 
	$datas = array();
	$length=count($data);
	for($i=0;$i<$length;$i++){	
		$datas[$i][id] = $data[$i][id];
		$datas[$i][book_name] = $data[$i][book_name];
		$datas[$i][author] = $data[$i][author];
		$datas[$i][price] = $data[$i][price];
		$datas[$i][isbn] = $data[$i][isbn];
		$datas[$i][press] = $data[$i][press];
		$datas[$i][intro] = $data[$i][intro];
		$datas[$i][photo1] = $data[$i][photo1];
		$datas[$i][photo2] = $data[$i][photo2];
		$datas[$i][photo3] = $data[$i][photo3];
		$datas[$i][date] = $data[$i][date];
	}
	
	mysql_close();

	
	include("bookDetail.html");
?>