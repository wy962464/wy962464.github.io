window.onload=function(){
      //cookie
//var p = document.querySelector(".my");
// //获取cookie里面的值   
// if (getCookie("username")) {
//     var un = getCookie('username');
//     p.innerHTML = decodeURIComponent(un)+"的购物车";
//  }else {
//     location.href = "./DL.html";
//  }

    //本地存储
     var p = document.querySelector(".my");
     if (localStorage.getItem("username")){
      var un =localStorage.getItem('username');
      p.innerHTML = decodeURIComponent(un)+"的购物车";
     }else{
         location.href = "./DL.html";
     }
       function setCart(arr){
         localStorage.setItem('cart',JSON.stringify(arr))
     }

     showList()
     function getCart(){
      var list = localStorage.getItem('cart')||"[]"; //字符串
      return JSON.parse(list);
    }
    function setCart(arr){
        localStorage.setItem('cart',JSON.stringify(arr))
    }
    
function removelist(num){
   var productList = getCart();
      console.log(productList);
      var arr=[]
      $.each(productList,function(index,product){
             if(index!=num){
                arr.push(product)
             }
      })
      productList=arr
      setCart(productList)
}

    function showList(){
      var productList = getCart();
      if(productList.length<1){
          $('.wp').hide();
          $('.kong').show();
          return;
      }
      $('.wp').empty();
      $('.kong').hide();
      $.each(productList,function(index,product){
             var aa= product.Product_price *  product.Product_datanum
            $('.list').append(
               `<div class="wp" >
               <div class="wp_">
                   <div class="wp_1">
                       <div class="wp_1_1">
                           <input class="qx_1" type="checkbox" checked>
                       </div>
                       <div class="wp_1_2">
                               <div class="wp_1_2_1">
                                       <div class="wp_1_2_1_img">
                                           <a href="javascript:;">
                                       <img src=${product.Product_img} alt="">
                                           </a>
                                           </div>
                                       <div class="wp_1_2_1_text">
                                       ${product.Product_name} Z Fold2 5G(SM-F9160)折叠屏 双模5G手机 骁龙865+ 内外双屏 120Hz自适应屏幕 12GB+512GB松烟墨
                                           </div>
                               </div>
                       </div>
                       <div class="wp_1_3">
                             <p>松烟墨</p>
                             <p>12GB+512GB</p>
                       </div>
                       <div class="wp_1_4">
                            <p>¥<span class="money">${product.Product_price}</span></p>
                            <p><span>白条24期免息</span></p>
                       </div>
                       <div class="wp_1_5">
                               <div class="wp_1_5_1">
                                   <a href="javascript:;" class="jian">-</a>
                                   <input type="text" value="${product.Product_datanum}" readonly="readonly">
                                   <a href="javascript:;" class="jia">+</a>
                               </div>
                       </div>
                       <div class="wp_1_6">
                           <strong class="xj ">${"￥  "+aa}</strong>     
                       </div>
                       <div class="wp_1_7">
                              <a href="javascript:;" class="move">删除</a>
                        </div>
               </div>
                  </div>
            </div>`
            )
      })
    }
    //
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
                     $(".qx").prop("checked",false)
                     $(".zj").html("￥"+0)
              })
         //每个物品后面的删除
           $(".list").on("click",".move",function(){  
               removelist($(this).index())
               $(this).parent().parent().parent().parent().remove() 
           })


           getmoney()
       
            //点击加减
            $(".jia").on("click",function(){
                 var num=parseInt($(this).prev().val()) 
                 num++;
                 $(this).prev().val(num)
                 var p=parseInt($(this).parent().parent().prev().find(".money").html()) 
                  var price=(p*num)
                  $(this).parents(".wp_1_5").next().children().html("￥"+price)
                  getmoney()
                  setCart(productList)
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