<?php
$id = $_GET["id"];

$conn=mysql_connect("localhost","root","root") or die("数据库打开出错");
mysql_select_db("newsystem");
mysql_query("set names utf8");

$sql="select * from user where id='$id'";

$result2=mysql_query($sql);
$row2=mysql_fetch_object($result2);
Header(  "Content-type:image/jpeg"); 

echo $row2->photo;
// 
// 
// $conn=mysql_connect("localhost","root","root") or die("数据库打开出错");
// mysql_select_db("photo");
// mysql_query("set names utf8");

// $sql="select * from photo where id='$id'";

// $result2=mysql_query($sql);
// $row2=mysql_fetch_object($result2);
// Header(  "Content-type:image/jpeg"); 

// echo $row2->binarydata;

?>