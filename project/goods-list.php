<?php

require_once 'public.php';


$order = $_GET['order'];
$orderType = $_GET['orderType'];
$key = $_GET['key'];

if ($orderType == 'normal') {
    $sql = "SELECT * from goodsinfo where goods_name LIKE '%$key%'";
} else {
    $sql = "SELECT * from goodsinfo where goods_name LIKE '%$key%' ORDER BY $order $orderType ";
}

$result = mysqli_query($conn, $sql);

$list = array();

while ($data = mysqli_fetch_array($result)) {

    $obj = array();
    $obj['id'] = $data['id'];
    $obj['goods_name'] = $data['goods_name'];
    $obj['goods_price'] = $data['goods_price'];
    $obj['goods_desc'] = $data['goods_desc'];
    $obj['goods_image'] = $data['goods_image'];

    $list[] = $obj;
   
}
$obj = array();
$obj['code'] = 1;
$obj['data'] = $list;

echo json_encode($obj);
