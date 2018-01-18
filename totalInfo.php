<?php
	
	require('conn.php');
	
	if($_POST['type']){
		$type = $_POST['type'];
	}else{
		$type = 1;
	}
	
	$sqlCount = "select count(*) from article where type='" .  $type . "'";
	$rs = mysql_query($sqlCount) or die ("统计失败");
	
	while($row = mysql_fetch_array($rs)){  
	    $count = $row;  
	} 

//	echo $count;
	echo urldecode(json_encode($count));	

	mysql_close();
	
?>


	


