$(function(){
    // 楼层跳跃
    $(window).scroll(function(){
        if($(this).scrollTop()<200){
               $("#search").css({"position":"absolute", "top":"0px","border-bottom":"none","background":"none", })
        }else if($(this).scrollTop()>200){
           $("#search").css({"position":"fixed","zIndex":"2","top":"0","background":"#fff","margin":"0 auto","border-bottom":"2px solid #f10214","width":"1190px"})
        }        
        if($(this).scrollTop()>=600){
              $("#left").css({"position":"fixed","top":"75px",})
                $(".back").css({"display":"block"})
        }else if($(this).scrollTop()<600){
            $("#left").css({"position":"absolute","top":"622px",})
            $(".back").css({"display":"none"})
        }
        if($(this).scrollTop()>=3000){
            $(".a_8").css({"color":"red"})
            $(".a_3").css({"color":"#333"})
        }else if($(this).scrollTop()>=1900){
            $(".a_3").css({"color":"red"})
            $(".a_1").css({"color":"#333"})
            $(".a_2").css({"color":"#333"})
            $(".a_8").css({"color":"#333"})
        }else if($(this).scrollTop()>=900){
            $(".a_3").css({"color":"#333"})
            $(".a_1").css({"color":"#333"})
            $(".a_2").css({"color":"red"})
            $(".a_8").css({"color":"#333"})
        }else if($(this).scrollTop()>=600){
            $(".a_1").css({"color":"red"})
            $(".a_2").css({"color":"#333"})
            $(".a_3").css({"color":"#333"})
            $(".a_8").css({"color":"#333"})
        }else{
            $(".a_1").css({"color":"#333"})
        }
    })
       $(".back").on("click",function(){
            $(window).scrollTop(0)
    })
       $(".a_4").on("click",function(){
        $(window).scrollTop(600)
       })
       $(".a_5").on("click",function(){
        $(window).scrollTop(900)
       })
       $(".a_6").on("click",function(){
        $(window).scrollTop(1900)
       })
       $(".a_7").on("click",function(){
        $(window).scrollTop(2900)
       })      
  //倒计时
      var cut=null
   function show(){
          var timer1=new Date().getTime()
                var timer2=new Date("2021,1,6 10:10 ").getTime()
                   cut=parseInt((timer2-timer1)/1000)
               var day=parseInt(cut/(24*60*60))
                    cut =cut-24*60*60*day
                var hour=parseInt(cut/3600)
                    cut =cut-60*60*hour
                var minter=parseInt(cut/60)
                var second=cut-60*minter
           if(hour<10){
            $(".main_hour_1").html("0"+`${hour}`);
           }else{
            $(".main_hour_1").html(`${hour}`);
           }
          if(minter<10){
            $(".main_minter").html("0"+`${minter}`)
          }else{
            $(".main_minter").html(`${minter}`)
          }
         if(second<10){
            $(".main_second ").html("0"+`${second}`)
         }else{
              $(".main_second ").html(`${second}`)
         }
     }
            setInterval(function(){show()},1000)
       //Tab栏
           // 话费流量充值
         $(".hfcz").on("mouseover",function(){
           $(".hf").css({"color":"red"})
           $(".hfcz_").css({"display":"block"})
           $(".llcz_").css({"display":"none"})
         })
         $(".hfcz").on("mouseleave",function(){
            $(".hf").css({"color":"#444444"})
          })
          $(".llcz").on("mouseover",function(){
            $(".lc").css({"color":"red"})
            $(".llcz_").css({"display":"block"})
            $(".hfcz_").css({"display":"none"})
          })
          $(".llcz").on("mouseleave",function(){
            $(".lc").css({"color":"#444444"})
          })
        //话费 
            $(".tab_top_1").on("mouseover",function(){
                   $(this).css({"border-bottom":"2px solid #e1251b"})
                   $(".tab_top_main").css({"display":"block"})
                   $(".jp").css({"display":"none"})
                   $(".jd").css({"display":"none"})
            })
            $(".tab_top_1").on("mouseleave",function(){
                $(this).css({"border-bottom":"none"})
            })
            $(".D").on("mouseover",function(){
                  $(".tab").css({"display":"block"})
            })
            $(".E").on("mouseover",function(){
                $(".tab").css({"display":"block"})
          })
            $(".F").on("mouseover",function(){
            $(".tab").css({"display":"block"})
          })
            $(".G").on("mouseleave",function(){
                $(".tab").css({"display":"none"})
          })
       //机票
            $(".tab_top_2").on("mouseover",function(){
                $(this).css({"border-bottom":"2px solid #e1251b"})
                $(".tab_top_main").css({"display":"none"})
                $(".B").css({"display":"block"})
                $(".C").css({"display":"none"})
         })
         $(".tab_top_2").on("mouseleave",function(){
             $(this).css({"border-bottom":"none"})
         })
      //酒店
      $(".tab_top_3").on("mouseover",function(){
        $(this).css({"border-bottom":"2px solid #e1251b"})
        $(".tab_top_main").css({"display":"none"})
        $(".B").css({"display":"none"})
        $(".C").css({"display":"block"})
    })
    $(".tab_top_3").on("mouseleave",function(){
        $(this).css({"border-bottom":"none"})
    })
       $(".tc").on("click",function(){
          $(".tab").css({"display":"none"})
       })
    //轮播图 
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var swiper = new Swiper('.yixing', {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

})





