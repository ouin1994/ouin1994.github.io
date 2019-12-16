<?php
require_once 'public.php';


$user_name = $_GET['username'];

$sql = "SELECT * from addressinfo where username = '$user_name'";

$result  = mysqli_query($conn, $sql);

$res = array();

while ($goods = mysqli_fetch_array($result)) {
    $list = array();
    $list['addname'] =  $goods['addname'];
    $list['addplace'] = $goods['addplace'];
    $list['addtel'] =  $goods['addtel'];
    $list['defaultnews'] = $goods['defaultnews'];
    $list['id'] = $goods['id'];
    $res[] = $list;
}

$obj = array();
$obj['code'] = 1;
$obj["msg"] = '成功';
$obj['data'] = $res;

echo json_encode($obj);
