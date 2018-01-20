<?php
	
	require('conn.php');
	$keyword = $_POST[keyword];
	
	
//SELECT * FROM [user] WHERE u_name LIKE '%三%' 
	$sql = "SELECT * FROM book WHERE book_name LIKE '%" . $keyword . "%' ";   //mysql查询语句  
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
		$datas[$i][intro] = $data[$i][intro];
		$datas[$i][date] = $data[$i][date];
		$datas[$i][pic] = $data[$i][photo1];
	}
	echo urldecode(json_encode($datas));	

	mysql_close();
	
?>


	


