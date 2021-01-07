window.onload=function(){
var p = document.querySelector(".my");
//获取cookie里面的值   
if (getCookie("username")) {
    var un = getCookie('username');
    p.innerHTML = decodeURIComponent(un)+"的购物车";
 }else {
    location.href = "./DL.html";
 }

                     
                $(".qx").click(function(){
                  $(".qx").prop("checked",$(this).prop("checked"))
                  $(".qx_1").prop("checked",$(this).prop("checked"))
                  getmoney()
                })
                $(".qx_1").click(function(){
                     if($(".qx_1:checked").length==$(".qx_1").length){
                        $(".qx").prop("checked",true)
                     }else{
                        $(".qx").prop("checked",false)
                     }
                     getmoney()
                })
                 function getmoney(){
                       var sum=0;
                       $(".qx_1:checked").parents(".wp").find(".xj").each(function(index,item){
                               sum+=parseInt($(item).html().substring(1))
                       })
                       $(".zj").html("￥"+sum)
              }
              
           
           
              $(".qingkong").on("click",function(){
                     $(".wp").remove()
                     $(".kong").css({display:"block"})
                     $(".zj").html("￥"+0)
              })
         //每个物品后面的删除
           $(".move").on("click",function(){
                $(this).parent().parent().parent().parent().remove() 
           })


           $.each($(".xj"),function(index,item){
               var qq=parseInt($(".money").eq(index).html())
                  $(item).html("¥"+qq)
           })          

           getmoney()

            //点击加减
            $(".jia").on("click",function(){
                 var num=parseInt($(this).prev().val()) 
                 num++;
                 $(this).prev().val(num)
                 var p=parseInt($(this).parent().parent().prev().find(".money").html()) 
                  var price=(p*num)
                  console.log(p,num,price);
                  $(this).parents(".wp_1_5").next().children().html("￥"+price)
                  getmoney()
            })
            $(".jian").on("click",function(){
               var num=parseInt($(this).next().val()) 
               num--;
               if(num<1){
                  num=1
               }
               $(this).next().val(num)
               var p=parseInt($(this).parent().parent().prev().find(".money").html()) 
                var price=(p*num)
                console.log(p,num,price);
                $(this).parents(".wp_1_5").next().children().html("￥"+price)
                getmoney()
          })

         //   $(".jian").on("click",function(){
         //      if($(this).next().val()==1){
         //       $(this).next().val("1")
         //      }else{
         //          var n=$(this).next().val()
         //          var num=parseInt(n)-1
         //          $(this).next().val(num)
         //          var p=parseInt($(".money").html()) 
         //          var oo=p*num 
         //          $(this).parent().parent().next().children().html("¥"+oo)

         //      }
         //      getmoney()
         //   })
           
         //   $(".jia").on("click",function(){
         //    if($(this).prev().val()<0){
         //       $(this).prev().val("1")
         //    }else{
         //         var n=$(this).prev().val()
         //        var num=parseInt(n)+1
         //        var p= parseInt($(".money").html())
         //         $(this).prev().val(num)
         //          var oo=p*num 
         //          $(this).parent().parent().next().children().html("¥"+oo)
         //    }
         //    getmoney()
         // })

         $(".jiesuan").on("click",function(){
              alert("总计"+$(".zj").html()+"元")
         })
                     
                  

            
  



}