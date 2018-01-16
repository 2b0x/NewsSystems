<?php
	require('conn.php');
		$timestamp = $_POST['timestamp'];
		$sqlstr = "UPDATE countDown SET countTime=" . $timestamp . " where id=1";  
		if (!mysql_query($sqlstr)) {
//				echo "修改失败--" . mysql_error();
				echo "0";
			}else{
//				echo "修改成功";
				echo "1";
			}
?>