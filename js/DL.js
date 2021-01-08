window.onload=function(){

  //首先检测cookie里是否有对应的值
  var name = getCookie("username");
  var mm=getCookie("password");
  //判断如果有值 则把值赋予 j1    decodeURIComponent url编码转中文
   if (name) {
    $("#dl").on("mouseover",function(){
        $("#dl").val(decodeURIComponent(name)) ;
    })
   }
   if (mm) {
    $("#mm").on("click",function(){
        $("#mm").val(decodeURIComponent(mm)) ;
    })
   }
    //  $(".wjmm_btn").on("click",function(){
    //        $.ajax({
    //           type:"get",
    //          url:"./DL.php",
    //          data:{
    //           username:$("#dl").val(),
    //           password:$("#mm").val(),
    //          },
    //          dataType:"json",
    //          success:function(res){
    //             if(res.code==1){
    //               alert("登录成功")
    //               location.href = "./jd.html";
    //             }else{
    //               alert ("登陆失败,请输入正确的账号或者密码!");
    //               $("#dl").val("");
    //               $("#mm").val("");
    //             }
    //          } 
    //        })
    //  })

     $(".wjmm_btn").on("click",function(){

            // $.ajax({
            //   url:"./details.json",
            //   type:"get",
            //   data:{
            //     username:$("#dl").val(),
            //     password:$("#mm").val(),
            //   },
            //   success:function(res){
            //     if(res.code==1){
            //       alert ("登录成功")
            //      localStorage.setItem('name',$('#dl').val());
            //      location.href = "./jd.html"
            //     }
                
            //   }
            // })
             var un=localStorage.getItem("username")
             var pw=localStorage.getItem("password")
             console.log(un,pw);
             if($("#dl").val()==un&&$("#mm").val()==pw){
                     alert ("登陆成功")
                     location.href = "./jd.html";
             }else{
                alert ("登陆失败,请输入正确的账号或者密码!")
                $("#dl").val("");
                $("#mm").val("");
             }
  
      })
   
}

