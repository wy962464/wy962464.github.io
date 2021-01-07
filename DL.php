<?php
include "./base.php";
    $un=$_GET["username"];
    $pw=$_GET["password"];
    $conn=mysqli_connect("127.0.0.1","root","root","jd");
    $sql="SELECT * FROM `dl` WHERE `username`= '$un' AND `password`='$pw'";
    $res=mysqli_query($conn,$sql);
    $date=mysqli_fetch_all($res,MYSQLI_ASSOC);
    if($date){
        $result=array('code'=>1);
        echo json_encode($result);

        // //设置cookie时长
         setcookie('username',$un,time()+60*60);
         setcookie('password',$pw,time()+60*60);

    }else{
        $result=array('code'=>0);
        echo json_encode($result);
    }
?>