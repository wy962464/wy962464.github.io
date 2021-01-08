window.onload=function(){
     
    
     $(".prev").on("click",function(){
     $(".td").css({"left":"0"})
     $(".prev").css({"width":"22px","height":"32px","background-image":"url('https://static.360buyimg.com/item/unite/1.0.114/components/default-soa/preview/i/__sprite.png')","background-position":"0 -54px"})
    })
    $(".next").on("click",function(){
        $(".td").css({"left":"-304px"})
        $(".next").css({"width":"22px","height":"32px","background-image":"url('https://static.360buyimg.com/item/unite/1.0.114/components/default-soa/preview/i/__sprite.png')","background-position":"-78px 0"})
    })
   //本地存储 商品信息
    function getCart(){
      var list = localStorage.getItem('cart')||"[]"; //字符串
      return JSON.parse(list);
    }
    function setCart(arr){
        localStorage.setItem('cart',JSON.stringify(arr))
    }
       $(".btn").on("click",function(){
           var newProduct={
                Product_img: $(".btn").data("img"),
                Product_name: $(".btn").data("name"),
                Product_price: $(".btn").data("price"),
                Product_datanum: $(".btn").data("num"),
           }
            // 先获取原来的商品列表数组  
           var productList = getCart();
           // 把新商品添加进去
           productList.push(newProduct)
           setCart(productList)
            alert ("商品添加成功")
            location.href = "./shop.html";
       })

    //放大镜
          $(".left_1").on("mouseover",function(){
                    $(".yeallow_").css({display:"block",})
                    $(".yeallow").css({display:"block",})
          })
          $(".left_1").on("mouseleave",function(){
            $(".yeallow_").css({display:"none",})
            $(".yeallow").css({display:"none",})
         })
        $(document).on("mousemove",function(e){
                    var x=e.pageX-$(".left_1").offset().left-($(".yeallow").width() / 2)
                    var y=e.pageY-$(".left_1").offset().top-($(".yeallow").height() / 2)
                
            // 遮罩层能移动的最大距离
                var yeallowMaxleft=$(".left_1").width()-$(".yeallow").width()
                var yeallowMaxtop=$(".left_1").height()-$(".yeallow").height()
              //限制遮罩层上下左右的位置
              if(x<0){
                  x=0
              }else if(x> yeallowMaxleft){
                    x=yeallowMaxleft
              }
                if(y<0){
                  y=0
                }else if(y> yeallowMaxtop){
                  y=yeallowMaxtop
            }
            $(".yeallow").css({
                left:x,
                top:y,
            })

            var bigimgMaxleft=$(".bigimg").width()-$(".yeallow_").width()
            var bigimgMaxtop=$(".bigimg").height()-$(".yeallow_").height()


            var bigimgleft=(x*bigimgMaxleft)/yeallowMaxleft
            var bigimgtop=(y*bigimgMaxtop)/yeallowMaxtop
           
            $(".bigimg").css({
              left:-bigimgleft,
              top:-bigimgtop,
            })
        })


   //购物车 增加 减少
    $(".add_").on("click",function(){
     var n= $(this).prev().val()
         var num=parseInt(n)+1
         
         $(this).prev().val(num)
         var datanum=$(".add_2_val").val()
         $(".btn").attr("data-num",datanum)
          
    })
    $(".add-").on("click",function(){
          if($(this).next().val()==1){
                $(this).css({cursor:"not-allowed"})
               $("add_2_val").val("1")
          }else{
            $(this).css({cursor: "pointer"})
            var n=$(this).next().val()
            var num=parseInt(n)-1
            $(this).next().val(num)
            var datanum=$(".add_2_val").val()
            $(".btn").attr("data-num",datanum)
          }
          
    })
  

}
