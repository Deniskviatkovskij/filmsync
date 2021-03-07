$(document).ready(function(){
    //Add active class
    $(".search_icon").click(function(){
     $(".search_screen").addClass("active")
    });
 
 //remove active class
 $(".close_icon ").click(function(){
     $(".search_screen").removeClass("active")
    });
 
 
    $(".close_icon3").click(function(){
     $(".search_screen").removeClass("active")
    });
   });
 
 
   $(document).ready(function(){
    //Add active class
    $(".mail_icon").click(function(){
     $(".mail_screen").toggleClass("active")
    });
 
 
    $(".close_icon2").click(function(){
     $(".mail_screen").removeClass("active")
    });
 
    $(".search_icon").click(function(){
     $(".mail_screen").removeClass("active")
    });
   });
 