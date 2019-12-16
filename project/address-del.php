<?php
require_once 'public.php';


$user_name = $_GET['username'];
$id = $_GET['id'];

$sql = "DELETE from addressinfo where username = '$user_name' AND id = $id";

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
