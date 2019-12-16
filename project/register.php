<?php
require_once 'public.php';
// 获取参数
$username = $_GET['username'];
$password = $_GET['password'];


// sql语句
$sql = "select count(*) from userinfo WHERE username = '$username'";

// 查询语句

$result = mysqli_query($conn, $sql);


// 从结果集中获取数据
$data = mysqli_fetch_array($result);

// echo json_encode($data);

$obj = array();

if($data['0']) { // 用户存在

$obj['code'] = 0;
$obj['msg'] = '用户名已存在';
$obj['data'] = false;

} else {
  $sql = "INSERT INTO userinfo(username, `password`) VALUES ('$username', '$password')";

  mysqli_query($conn, $sql);

  // // 受影响行数
  $row = mysqli_affected_rows($conn);

  // echo $row;
  if($row) {
    
  $obj['code'] = 1;
  $obj['msg'] = '成功';
  $obj['data'] = true;
  } else {
    $obj['code'] = 0;
    $obj['msg'] = '失败';
    $obj['data'] = false;
  }

  // echo $username;
  // echo $password;
  // echo $telephone;

}

echo json_encode($obj);
