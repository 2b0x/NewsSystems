<?php
		require('conn.php');
		$book_name = isset($_POST['book_name'])? $_POST['book_name'] : '';  
		$author = isset($_POST['author'])? $_POST['author'] : '';
		$price = isset($_POST['price'])? $_POST['price'] : '';  
		$isbn = isset($_POST['isbn'])? $_POST['isbn'] : '';  
		$press = isset($_POST['press'])? $_POST['press'] : '';  
		$intro = isset($_POST['intro'])? $_POST['intro'] : ''; 
		$nameTag = time();
		$filename1 = $nameTag . '0' . substr($_FILES['photo1']['name'], strrpos($_FILES['photo1']['name'],'.'));  
		$filename2 = $nameTag . '1' . substr($_FILES['photo2']['name'], strrpos($_FILES['photo2']['name'],'.'));  
		$filename3 = $nameTag . '2' . substr($_FILES['photo3']['name'], strrpos($_FILES['photo3']['name'],'.'));  
		$response = array();
		$path1 = "img/book/"  . $filename1;
		$path2 = "img/book/"  . $filename2;
		$path3 = "img/book/"  . $filename3;
		if(move_uploaded_file($_FILES['photo1']['tmp_name'], $path1) && move_uploaded_file($_FILES['photo2']['tmp_name'], $path2) && move_uploaded_file($_FILES['photo3']['tmp_name'], $path3) ){
					  
//		    $response['isSuccess'] = true;  
//		    $response['book_name'] = $book_name;  
//		    $response['author'] = $author;
//		    $response['price'] = $price;  
//		    $response['isbn'] = $isbn;  
//		    $response['press'] = $press;  
//		    $response['intro'] = $intro;  
//		    $response['photo1'] = $path1; 
//		    $response['photo2'] = $path2; 
//		    $response['photo3'] = $path3; 
			 
			$sqlstr = "insert into book(book_name,author,price,isbn,press,intro,photo1,photo2,photo3) values('" .$book_name. "','" .$author. "','" .$price. "','" .$isbn. "','" .$press. "','" .$intro. "','" .$path1. "','" .$path2. "','" .$path3. "')";  
			@mysql_query($sqlstr) or die(mysql_error());  
		}else{  
		    $response['isSuccess'] = false;  
		}  
		echo json_encode($response);
?>