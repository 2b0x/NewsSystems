<?php
	require('conn.php');
	
	if(empty($_POST[artId])){
		echo '0';
	}else{
		$artId = $_POST[artId];
		$sql = "DELETE FROM article WHERE id='" . $artId . "'";
		$rs = mysql_query($sql); 
		echo '1';
	}
	
	
?>