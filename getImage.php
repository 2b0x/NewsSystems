<?php
require('conn.php');

// 判断action  
$action = isset($_REQUEST['action'])? $_REQUEST['action'] : ''; 

if($action=='show'){  
    $id = isset($_GET['id'])? intval($_GET['id']) : 0;  
    $sqlstr = "select * from user where id=$id";  
    $query = mysql_query($sqlstr) or die(mysql_error());  
    $thread = mysql_fetch_assoc($query);  
    if($thread){  
        header('content-type:'.$thread['type']);  
        echo $thread['photo'];  
        exit();  
    }  
}
?>