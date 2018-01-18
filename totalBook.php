<?php
	
	require('conn.php');
	
	$sqlCount = "select count(*) from book";
	$rs = mysql_query($sqlCount) or die ("统计失败");	
	while($row = mysql_fetch_array($rs)){  
	    $count = $row;  
	} 

//	echo $count;
	echo urldecode(json_encode($count));	

	mysql_close();
	
?>


	


