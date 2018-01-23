<?php

	require('conn.php');

	$school = $_POST[school];

	$sql = "SELECT * FROM community WHERE school='" . $school . "'" ;   //mysql查询语句  

	$rs = mysql_query($sql) or die ("查询失败"); 
	$data = array(); 
	while($row = mysql_fetch_array($rs)){  
	    $data[] = $row;  //传值给一个数组  
	} 
	
	$datas = array();
	$length=count($data);
	for($i=0;$i<$length;$i++){	
		$datas[$i][userid] = $data[$i][userid];
		$datas[$i][username] = $data[$i][username];
		$datas[$i][userpic] = $data[$i][userpic];
		$datas[$i][content] = $data[$i][content];
		$datas[$i][date] = $data[$i][date];
	}
	echo urldecode(json_encode($datas));	
	
	mysql_close();

?>