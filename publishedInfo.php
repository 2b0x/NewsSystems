<?php
	
	require('conn.php');
	
	if(empty($_POST[type])){
		$type=1;
	}else{
		$type = $_POST[type];
	}
	
	if(empty($_POST[page])){
		$page=1;
	}else{
		$page = $_POST[page];
	}
	
	$pageEnd=$page*20;
	$pageStart=$pageEnd-20;


	if($type=='5'){
		$sql = "SELECT * FROM article LIMIT " . $pageStart .  ",20";   //mysql查询语句  
	}else{
		$sql = "SELECT * FROM article WHERE type='" . $type . "' LIMIT " . $pageStart .  ",20";   //mysql查询语句  
	}

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

	mysql_close();
	
?>


	


