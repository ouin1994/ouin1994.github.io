<?php

require_once 'public.php';

$user_name = $_GET['username'];
$addname = $_GET['addName'];
$addtel = $_GET['phoneNum'];
$addplace = $_GET['address'];
$default = $_GET['defaultNews'];


$obj = array();
$obj['code'] = 0;
$obj['msg'] = '加入失败';
$obj['data'] = false;


$sql = "INSERT INTO addressinfo(username,addname,addtel,addplace,defaultnews) VALUES ('$user_name','$addname','$addtel','$addplace ','$default')";
 
mysqli_query($conn, $sql); // 受影响行数

$row = mysqli_affected_rows($conn);
$list = array();


if ($row) {
  $obj['code'] = 1;
  $obj['msg'] = '加入地址成功';
  $obj['data'] = true;
}


echo json_encode($obj);
