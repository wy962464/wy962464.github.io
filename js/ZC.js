window.onload=function(){
    //    $(".btn").on("click",function(){
    //         if($(".main_3_1").val()!== $(".main_5_1").val()){
    //                  alert ("两次密码输入不一致，请重新输入！");
    //                  $(".main_3_1").val("");
    //                  $(".main_5_1").val("");
    //         }else{
    //                 $.ajax({
    //                     url:"./ZC.php",
    //                     type:"get",
    //                     data:{
    //                         username:$(".main_1_1").val(),
    //                         password:$(".main_3_1").val(),
    //                     },
    //                     dataType:"json",
    //                     success:function(res){
    //                        if(res.code==1){
    //                         alert("您的用户名重复,请重新输入");
    //                         $(".main_1_1").val(" ");
    //                        }else{
    //                         alert("注册成功");
    //                         location.href = "./DL.html";
    //                        }
    //                     }
    //                 })
    //         }
    //    })


       $(".btn").on("click",function(){
        if($(".main_3_1").val()!== $(".main_5_1").val()){
            alert ("两次密码输入不一致，请重新输入！");
            $(".main_3_1").val("");
            $(".main_5_1").val("");
        }else{
             $.ajax({
                 url:"./details.json",
                 date:{
                    username:$(".main_1_1").val(),
                    password:$(".main_3_1").val(),
                 },
                success:function(res){
                    if(res.code==1){
                        alert ("注册成功")
                        localStorage.setItem('username',$(".main_1_1").val());
                        localStorage.setItem('password',$(".main_3_1").val());
                        location.href = "./DL.html";
                    }
                }
             })
        }
       })
}