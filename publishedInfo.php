<?php
	
	require('conn.php');
	
	if($_POST['type']&&$_POST['page']){
		$type = $_POST[type];
		$page = $_POST[page];
	}else{
		$type = 1;
		$page = 1;
	}
	//
	$sql = "SELECT * FROM article WHERE type='" . $type . "'";   //mysql查询语句  
	$rs = mysql_query($sql) or die ("查询失败"); 
	$data = array(); 
	while($row = mysql_fetch_array($rs)){  
	    $data[] = $row;  //传值给一个数组  
	} 
	$datas = array();
	

	for($i=0;$i<count($data);$i++){	
		$datas[$i][id] = $data[$i][id];
		$datas[$i][title] = $data[$i][title];
		$datas[$i][date] = $data[$i][date];
	}
	echo urldecode(json_encode($datas));	
//	$articleInfo = json_encode($datas);
//	print_r($articleInfo);
	
	
//	echo $articleInfo;
	
//	require('publishedInfo.html');
	
?>


	


