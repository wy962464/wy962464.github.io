window.onload=function(){
     $(".prev").on("click",function(){
     $(".td").css({"left":"0"})
     $(".prev").css({"width":"22px","height":"32px","background-image":"url('https://static.360buyimg.com/item/unite/1.0.114/components/default-soa/preview/i/__sprite.png')","background-position":"0 -54px"})
    })
    $(".next").on("click",function(){
        $(".td").css({"left":"-304px"})
        $(".next").css({"width":"22px","height":"32px","background-image":"url('https://static.360buyimg.com/item/unite/1.0.114/components/default-soa/preview/i/__sprite.png')","background-position":"-78px 0"})
    })
 

    //      var arr={
    //        src:"https://img10.360buyimg.com/n1/s450x450_jfs/t1/125477/20/11441/43547/5f4e2293E02391add/cf8bee33b3ed4394.jpg",
    //        src:"https://img10.360buyimg.com/n1/s450x450_jfs/t1/165542/30/1041/80587/5ff402efEbb866a8b/3c136c6203af1541.jpg",
    //        src:"https://img10.360buyimg.com/n1/s450x450_jfs/t1/126451/8/12239/106854/5f589ec9Ecf309274/c57bcc2eef39f3a2.jpg",
    //        src:"https://img10.360buyimg.com/n1/s450x450_jfs/t1/146146/40/7403/47012/5f4e2293Edbb64307/3f33162d781f3c4f.jpg",
    //        src:"https://img10.360buyimg.com/n1/s450x450_jfs/t1/121820/7/11425/47301/5f4e2294Ed28f7515/d33af4602d7900ac.jpg",
    //        src:"https://img10.360buyimg.com/n1/s450x450_jfs/t1/132382/10/8960/45466/5f4e2293E1d53d8a9/5792994acf2cb778.jpg",
    //        src:"https://img10.360buyimg.com/n1/s450x450_jfs/t1/135635/24/8882/27265/5f4e2293Eb55f4baf/50f86ee86da60ec5.jpg",
    //        src:"https://img10.360buyimg.com/n1/s450x450_jfs/t1/148546/29/7188/33319/5f4e2293E457bb828/168fed8ee4469a80.jpg",
    //        src:"https://img10.360buyimg.com/n1/s450x450_jfs/t1/147423/37/7319/16809/5f4e2294Ea23abb84/eec8991324adc201.jpg",
    //      }
         
    //     $("td").children.on("mouseover",function(){
    //            $("td").children.each(function(index,img){
    //               console.log(index,img);  
    //         })
    // })

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
         return $(this).prev().val(num)
    })
    $(".add-").on("click",function(){
          if($(this).next().val()==1){
                $(this).css({cursor:"not-allowed"})
               $("add_2_val").val("1")
          }else{
            $(this).css({cursor: "pointer"})
            var n=$(this).next().val()
            var num=parseInt(n)-1
           return  $(this).next().val(num)
          }
    })
  

}
