<?php
		require('conn.php');

		$type = $_POST['type'];
		$title = $_POST['title'];
		$content = $_POST['content'];
		
		if($type==1||$type==2||$type==3||$type==4){
			if( empty($title)|| empty($content) ){
				echo '1';
				return FALSE;
			}else{
//				echo $type . $title . $content;
				$sqlstr = "insert into article(title,content,type) values('" .$title. "','" .$content. "','" .$type. "')";  
				@mysql_query($sqlstr) or die(mysql_error());  
				echo '3';
				return TRUE;
				exit();  
			}
		}else{
			echo '2';
			return FALSE;
		}
			  
			
			
		








?>