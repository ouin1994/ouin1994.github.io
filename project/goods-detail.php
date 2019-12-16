<?php
require_once 'public.php';



$id = $_GET['id'];

$sql = "SELECT * from goodsinfo where id = '$id'";

$result = mysqli_query($conn, $sql);

$detail = mysqli_fetch_array($result);
if ($detail) {

    $list = array();
    $list['id'] = $detail['id'];
    $list['goods_name'] = $detail['goods_name'];
    $list['goods_price'] = $detail['goods_price'];
    $list['goods_desc'] = $detail['goods_desc'];
    $list['goods_image'] = $detail['goods_image'];
    $list['goods_images'] = $detail['goods_images'];


    $res = array();
    $res['code'] = 1;
    $res['msg'] = '成功';
    $res['data'] = $list;

    echo json_encode($res);
}
