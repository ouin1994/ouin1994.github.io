<?php
header('Content-Type:text/html;charset=utf-8');
header('Access-Control-Allow-Origin: *');

// die('45445');

//   链接库
$server = 'b-pkaru01ivvorcq.bch.rds.gz.baidubce.com:3306';
$username ='b_pkaru01ivvorcq';
$password = '1WMGHQEPWQ';
$dbname = 'b_pkaru01ivvorcq';
// $server = 'localhost:3306';
// $username = $password = 'root';
// $dbname = 'all';

$conn = mysqli_connect($server, $username, $password, $dbname);

if (!$conn) {
    die('数据库链接失败');
}
