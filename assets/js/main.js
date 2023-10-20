
     /*===========================================
     =     Header sticky when scroll browser     =
     =============================================*/
     window.onscroll = function() {scrollFunction()};

     function scrollFunction() {
       if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
         document.getElementById("header-menu").style.position = "fixed";
       } else {
         document.getElementById("header-menu").style.position = "static";
       }
     }
     