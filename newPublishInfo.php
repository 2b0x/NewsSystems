<?php
		require('conn.php');

		$type = $_POST['type'];
		$title = $_POST['title'];
		$content = $_POST['content'];
		
		if($type==1||$type==2||$type==3||$type==4){
			if( empty($title)|| empty($content) ){
//				echo "<script> alert('文章标题和内容不能为空！'); </script>";
				echo '1';
				return FALSE;
			}else{
//				echo $type . $title . $content;
//				 $sqlstr = "insert into article(title,content,type) values('" .$title. "','" .$content. "','" .$type. "')";  
//				 @mysql_query($sqlstr) or die(mysql_error());  
//				echo "<script> alert('发布成功！'); </script>";
				echo '3';
				return TRUE;
				exit();  
			}
		}else{
//			echo "<script> alert('请选择文章类型！'); </script>";
			echo '2';
			return FALSE;
		}
			  
			
			
		








?>