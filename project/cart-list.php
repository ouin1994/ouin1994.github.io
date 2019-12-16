<?php
require_once 'public.php';


$user_name = $_GET['username'];

$sql = "SELECT * from cartinfo where user_name = '$user_name'";

$result  = mysqli_query($conn, $sql);

$res = array();

while ($goods = mysqli_fetch_array($result)) {
    $list = array();
    $list['goods_name'] =  $goods['goods_name'];
    $list['goods_price'] = $goods['goods_price'];
    $list['goods_desc'] =  $goods['goods_desc'];
    $list['goods_img'] =   $goods['goods_img'];
    $list['goods_count'] = $goods['goods_count'];
    $list['goods_id'] = $goods['goods_id'];
    $res[] = $list;
}

$obj = array();
$obj['code'] = 1;
$obj["msg"] = '成功';
$obj['data'] = $res;

echo json_encode($obj);
