<?php
require_once 'public.php';

$user_name = $_GET['username'];
$goods_id = $_GET['goods_id'];

$sql = "DELETE from cartinfo where goods_id = $goods_id AND user_name = '$user_name'";

mysqli_query($conn, $sql);

$user = mysqli_affected_rows($conn);

$obj = array();
$obj['code'] = 0;
$obj['msg'] = '删除失败';
$obj['data'] = false;
if ($user) {
    $obj['code'] = 1;
    $obj['msg'] = '删除成功';
    $obj['data'] = true;
}
echo json_encode($obj);