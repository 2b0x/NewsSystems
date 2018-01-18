<?php
	require('conn.php');
	
	if(empty($_POST[bookId])){
		echo '0';
	}else{
		$bookId = $_POST[bookId];
		$sql = "DELETE FROM book WHERE id='" . $bookId . "'";
		$rs = mysql_query($sql); 
		echo '1';
	}
	
	
?>