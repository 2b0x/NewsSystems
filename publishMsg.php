<?php
require ('conn.php');

$userid = $_POST['userid'];
$username = $_POST['username'];
$content = $_POST['content'];
$userpic = $_POST['userpic'];
$school = $_POST['school'];

session_start();
if (empty($_SESSION['userid'])) {
	echo '0';
} else {
	if (empty($content)) {
		echo '噢噢，服务器暂时出了点小差错~';
	} else {
		$sqlstr = "insert into community(userid,username,school,userpic,content) values('" . $userid . "','" . $username . "','" . $school . "','" . $userpic . "','" . $content . "')";
		@mysql_query($sqlstr) or die(mysql_error());
		echo '1';
		exit();
	}
}
?>