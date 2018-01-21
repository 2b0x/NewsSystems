<?php
		require('conn.php');

		$userid = $_POST['userid'];
		$username = $_POST['username'];
		$content = $_POST['content'];
		$userpic = $_POST['userpic'];
		$school = $_POST['school'];
		
		if(empty($content)){
			echo '0';
		}else{
			$sqlstr = "insert into community(userid,username,school,userpic,content) values('" .$userid. "','" .$username. "','" .$school. "','" .$userpic. "','" .$content. "')";  
			@mysql_query($sqlstr) or die(mysql_error());  
			echo '1';
			exit();  
		}
		
		


?>