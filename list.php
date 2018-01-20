
<?php

	if(empty($_GET[type])){
		$type=3;
	}else{
		$type = $_GET[type];
	}
	
	
	include('list.html');
?>	
