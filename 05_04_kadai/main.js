$(document).ready(function(){
  // $(".first>p").css("display","none");
  // $(".first>p").show(3000);
  // $(".first>p").css("color","yellow");

//カウントダウン
  var num = 5;
  var speed = 1000;
  setInterval(function(){
  if(num >= 1){
  	$('.countnumber').html(num);
    $('.circle_outer').fadeOut(300,function(){$('.circle_outer').fadeIn(500)});
  	num--;}
  },speed);

setTimeout(function(){$(".top").fadeOut(500)},5500);


$(".title").css("display","none");
function start(){$(".title").fadeIn(500).fadeOut(1000)}
setTimeout(start,6000);



  //playerをマウスで操作
  $("body").mousemove(function(e){
    var x = e.pageX-50;
    var y = e.pageY-50;
    $(".player").css({top:500,left:x});
    });

// 　//ミサイル発射
//   //  $("body").on("click",function(){
//       $(".playground").append(`<img src="ミサイル.png" class="misile" width=30px height=50px>`);
//       $(".misile").stop().css({top: 500, left:e.pageX-50 ,position:'fixed'})
//       .animate({top:0},{duration:3000,easing:'linear'});
//   //  });


  //ランダム関数作成
  function rand(n){
  var val = Math.floor( Math.random()*n+1);
  return val;
};


//落下を関数化
function falling(){

//単位の生成
for (var i = 0; i < 30; i += 1) {
  $('.playground').append(`<img src="単位.png" class="tanni${i}" width=30px height=50px>`);

var y_axis = -rand(1000);
var x_axis = rand(1000)+ 200;

//単位落下
$(`.tanni${i}`).stop().css({top: y_axis +'px', left: x_axis  + 'px' ,position:'absolute'})
.animate({top:700 + 'px'}, { duration:rand(150)*100+2000, easing:'linear'}
);

var ytanni = $(`.tanni${i}`).offset().top;
//座標取得
if(ytanni > 500){$(`.tanni${i}`).fadeOut(500);};
//$(".player").position().left - 50 < $(`.tanni${i}`).position().left <$(".player").position().left+50)

// console.log($(`.tanni${i}`).offset().top);
};


//実験生成
for (var j = 0; j < 8; j += 1) {
  $('.playground').append(`<img src="実験.png" class="jikken${j}" width=30px height=50px>`);
//実験落下
$(`.jikken${j}`).stop().css({top: -rand(500) +'px', left: rand(1000)+200 + 'px' ,position:'fixed'})
.animate({top:700 + 'px'},{ duration:rand(150)*100+3000, queue:false, easing:'linear'})
}


}

  setTimeout(falling,6500);







});










//random　colorはあるのか？
