<?php
require ('conn.php');

session_start();
$userid = $_SESSION['userid'];

$uname = $_POST[name];
$phone = $_POST[phone];
$school = $_POST[school];
$password = $_POST[psw];

if (!empty($_FILES['file']['tmp_name'])) {
	$nameTag = time();
	$filename = $nameTag . '0' . substr($_FILES['file']['name'], strrpos($_FILES['file']['name'], '.'));
	$photo = "img/personPic/" . $filename;
	move_uploaded_file($_FILES['file']['tmp_name'], $photo);
} else {
	$photo = $_POST[photo];
}

$sqlstr = "UPDATE user SET uname='" . $uname . "',phone=" . $phone . ",school='" . $school . "',password=" . $password . ",photo='" . $photo . "' where id=" . $userid . "";
if (!mysql_query($sqlstr)) {
	echo "修改失败--" . mysql_error();
	//	echo "0";
} else {
	//					echo "修改成功";
$check_query = mysql_query("select * from user where id='$userid'");  
if($result = mysql_fetch_array($check_query)){  
    //登录成功  
    session_start();  
    $_SESSION['username'] = $result['uname'];  
    $_SESSION['phone'] = $result['phone'];  
    $_SESSION['school'] = $result['school'];  
    $_SESSION['userid'] = $result['id'];   
    $_SESSION['userpic'] = $result['photo']; 
//	echo '1';
	header("Location:index.php");
	exit;  
}
	//	echo "1";
}
?>