<?php
include "./base.php";
    $un=$_GET["username"];
    $pw=$_GET["password"];
    $conn=mysqli_connect("127.0.0.1","root","root","jd");
    $sql="SELECT * FROM `dl` WHERE `username`= '$un' ";
    $res=mysqli_query($conn,$sql);
    $date=mysqli_fetch_all($res,MYSQLI_ASSOC);
    if($date){
        $result=array('code'=>1);
        echo json_encode($result);
    }else{
        $result=array('code'=>0);
        echo json_encode($result);
        $sql="INSERT INTO `dl` (`username`,`password`) VALUES ('$un',$pw)";
        $add=mysqli_query($conn,$sql);
    }
?>