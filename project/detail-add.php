<?php

require_once 'public.php';

$goods_id = $_GET['goods_id'];
$user_name = $_GET['username'];
$goods_name = $_GET['goods_name'];
$goods_price = $_GET['goods_price'];
$goods_desc = $_GET['goods_desc'];
$goods_img = $_GET['goods_img'];
$goods_count = $_GET['goods_count'];


// 判断商品是否存在
$sql = "SELECT * from cartinfo WHERE goods_id = $goods_id AND user_name = '$user_name'";

$result = mysqli_query($conn, $sql);

$goods = mysqli_fetch_array($result);


$obj = array();
$obj['code'] = 0;
$obj['msg'] = '加购失败';
$obj['data'] = false;

if ($goods) {
  
  $count = $goods['goods_count'] + $goods_count;
  if($count>5){
    $obj['msg'] = '同一件商品数量累计不能超过五件';
    die(json_encode($obj));
  }else{
    $sql = "UPDATE cartinfo SET goods_count = $count WHERE goods_id = $goods_id AND user_name = '$user_name'";
  }
  
} else {
  $sql = "INSERT INTO cartinfo(goods_id, user_name, goods_name, goods_price, goods_desc, goods_img, goods_count) VALUES ('$goods_id','$user_name','$goods_name','$goods_price','$goods_desc','$goods_img',$goods_count)";
}

mysqli_query($conn, $sql); // 受影响行数

$row = mysqli_affected_rows($conn);

if ($row) {
  $obj['code'] = 1;
  $obj['msg'] = '加入购物车成功';
  $obj['data'] = true;
}


echo json_encode($obj);
