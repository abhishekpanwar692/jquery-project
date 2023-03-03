
$(document).ready (function(){
    $(".num-btn").on("click", function(){
        $(".text").val($(".text").val() + $(this).html())
    })
    $(".equl").on("click", function(){
      ex= $(".text").val();
      if(ex.includes('x')){
        ex= ex.replace('x','*');
      }
      $('.text').val(eval(ex));
    })
    $(".clear").on("click", function(){
        $(".text").val("0");
    })
    $(".back").on("click",function(){
       xr=$(".text").val();
        $(".text").val(xr.substring(0,xr.length - 1))
    }) 
    $("percentage").on("click" ,function(){
        s=$(".text").val();
       if(s / 100){
     console.log(s);
       }
    })


})
