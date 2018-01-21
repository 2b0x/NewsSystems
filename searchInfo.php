<?php
	
	require('conn.php');
	$keyword = $_POST[keyword];
	$type = $_POST[type];
	
	$sql = "SELECT * FROM article WHERE type='" . $type . "' AND title LIKE '%" . $keyword . "%' ";   //mysql查询语句  
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
		$datas[$i][date] = $data[$i][date];
	}
	echo urldecode(json_encode($datas));	
	
//	echo $keyword . '---' . $type;
	
	mysql_close();
	
?>


	


