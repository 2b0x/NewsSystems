<?php


$userEmail = $_POST[userEmail];
$passWord = $_POST[passWord];

include('conn.php');  
//检测用户名及密码是否正确  
$check_query = mysql_query("select * from user where email='$userEmail' and password='$passWord' limit 1");  
if($result = mysql_fetch_array($check_query)){  
    //登录成功  
    session_start();  
    $_SESSION['username'] = $result['uname'];  
    $_SESSION['email'] = $result['email'];  
    $_SESSION['phone'] = $result['phone'];  
    $_SESSION['school'] = $result['school'];  
    $_SESSION['userid'] = $result['id'];   
    $_SESSION['userpic'] = $result['photo']; 
	echo '1';
	exit;  
} else {
    exit('0');  
}  

?>