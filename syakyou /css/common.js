$(function() {
   $('.btn-gNav').on("click", function(){
 
     $(this).toggleClass('open');
     $('#gNav').toggleClass('open');
   });
 
 });
 
 // メニューをクリックされたら、非表示にする
 $(function() {
   $('.gNav-menu').on("click", function(){
      $('#gNav').removeClass('open');
   });
 });

 $(function() {
  $('#btn').click (function(){
    $("ul").toggle(1000);
    
  });

});

$(function() {
 $('#btn1').click (function(){
   $("ul").toggle(1000);
   
 });

});
$(function() {
 $('#btn2').click (function(){
   $("#img1").toggle(1000);
   
 });

});

$("#siz-up").on("click" , function (){
   $("#sec4 img").css("width" ,"600px");
   
});

$("#imgc").on("click" , function (){
  $("#sec4 img").attr("src","img/thumb_03.png");

});
$("#imgc").on("click" , function (){
  $("#sec4 img").toggleClass("src","img/thumb_03.png");

});


