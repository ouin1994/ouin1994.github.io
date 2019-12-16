<?php

require_once 'public.php';

//  从前端拿到信息
$username = $_GET['username'];
$password = $_GET['password'];


$sql = "select * from userinfo where username = '$username'";

$result = mysqli_query($conn, $sql);

$user = mysqli_fetch_array($result);

$obj = array();
$obj['code'] = 0;
$obj['msg'] = '用户名或密码错误';
$obj['data'] = false;

if ($user) {
    if ($password == $user['password']) {
        $obj['code'] = 1;
        $obj['msg'] = '成功';
        $obj['data'] = true;
    }
}

echo json_encode($obj);
