$(function(){
    $(".color1").on("click", function() {
        $(".selectcolor1").slideToggle();
    });

    $(".color2").on("click", function() {
        $(".selectcolor2").slideToggle();
    });
 });

/*表示*/
// $(function(){
//       $(".button_1").click(function(){
//         $(".botanical_1").css({
//           "opacity":"1",
//           "transition":"0.7s",
//           "top":"70px",
//           "left": "500px",
//         });
//       })
//     })
// $(function(){
//       $(".button_2").click(function(){
//         $(".botanical_2").css({
//           "opacity":"1",
//           "transition":"0.7s",
//           "top":"100px",
//           "left": "550px",
//         });
//       })
//     })
// $(function(){
//       $(".button_3").click(function(){
//         $(".botanical_3").css({
//           "opacity":"1",
//           "transition":"0.7s",
//           "top":"100px",
//           "left": "480px",
//         });
//       })
//     })
// $(function(){
//       $(".button_4").click(function(){
//         $(".botanical_4").css({
//           "opacity":"1",
//           "transition":"0.7s",
//           "top":"80px",
//           "left": "500px",
//         });
//       })
//     })
// $(function(){
//       $(".button_5").click(function(){
//         $(".botanical_5").css({
//           "opacity":"1",
//           "transition":"0.7s",
//           "top":"80px",
//           "left": "430px",
//         });
//       })
//     })
// $(function(){
//       $(".button_6").click(function(){
//         $(".botanical_6").css({
//           "opacity":"1",
//           "transition":"0.7s",
//           "top":"30px",
//           "left": "450px",
//         });
//       })
//     })
// $(function(){
//       $(".button_7").click(function(){
//         $(".botanical_7").css({
//           "opacity":"1",
//           "transition":"0.7s",
//           "top":"80px",
//           "left": "400px",
//         });
//       })
//     })
// $(function(){
//       $(".button_8").click(function(){
//         $(".botanical_8").css({
//           "opacity":"1",
//           "transition":"0.7s",
//           "top":"50px",
//           "left": "400px",
//         });
//       })
//     })
// $(function(){
//       $(".button_9").click(function(){
//         $(".botanical_9").css({
//           "opacity":"1",
//           "transition":"0.7s",
//           "top":"80px",
//           "left": "500px",
//         });
//       })
//     })
//
// /*非表示*/
//
// $(function(){
//       $(".botanical_1").click(function(){
//         $(this).css({
//           "opacity":"0",
//           "transition":"0.7s"
//         });
//       })
//     })

var buttonToFlowerConf = {
	"button_1" : "botanical_1",
	"button_2" : "botanical_2",
	"button_3" : "botanical_3",
	"button_4" : "botanical_4",
	"button_5" : "botanical_5",
	"button_6" : "botanical_6",
	"button_7" : "botanical_7",
	"button_8" : "botanical_8",
	"button_9" : "botanical_9",
	"button_10" : "botanical_10",
	"button_11" : "botanical_11",
	"button_12" : "botanical_12",
	"button_13" : "botanical_13",
	"button_14" : "botanical_14",
	"button_15" : "botanical_15",
	"button_16" : "botanical_16",
	"button_17" : "botanical_17",
	"button_18" : "botanical_18",
}


$(document).ready(function(){

	// $(".botanical_1").click(function(){
	$('.botanical').click(function(){
			$('.customizeImg').animate({opacity:0}, 1000);
			$('.customizeImg').animate({scale:"0"}, 10000);

			$(this).css({"display":"none"});

			var targetClass = buttonToFlowerConf[ $(this).attr("class").split(" ")[1]];
			console.log( $(this).attr("class").split(" ")[1]);

			console.log(targetClass);
			var path = $.bezierCurve(180, 430).addPoint(230, 80).addPoint(250, 200);

			//初期状態に設定
			$('.' + targetClass).animate(
			// $(".botanical_1").animate(
				{
				bezierPath: path,
				scale:'0.4',
				opacity:'0'
			}, 0, "easeInOutCubic");

			//拡大、移動、可視化に設定
			$('.' + targetClass).animate(
				{
	    	bezierPath: path,
				scale:'1',
				opacity:'1'
	 		}, 380, "easeInOutCubic");

	});

	// Drag and Drop
	var panstartX;
	var panstartY;
	$('.custamizeBotanical').each(function (idx, $el) {
		var hammertime = new Hammer($el);
		hammertime.get('rotate').set({ enable: true })
		hammertime.get('pan').set({threshold: 2});

		hammertime.on('rotate', function (ev) {

			console.log("hogerotate");
		});


		// hammertime.on('panstart', function(ev){
		// 	panstartX = ev.target.x;
		// 	panstartY = ev.target.y;
    //
    //
		// 	ev.target.style.top = panstartY;
		// 	ev.target.style.left = panstartX;
		// });
    //
		// hammertime.on('pan', function (ev) {
		// 	 ev.preventDefault();
		// 	 var target = ev.target;
		// 	 target.style.top = ev.deltaY + (panstartY)  - 360 + 'px';
		// 	 target.style.left = ev.deltaX + panstartX  + 'px';
    //
		// })
	})

	$('img').attr('onmousedown', 'return false');

});

/*    // Drag and Drop
    $('.botanical').each(function (idx, $el) {
      var hammertime = new Hammer($el)
      hammertime.on('pan', function (ev) {
        ev.preventDefault()
        var target = ev.target;
        target.style.top = ev.deltaY + 520 + 'px';
        target.style.left = ev.deltaX + 380 + 'px';
        target.style.position = 'absolute';
        console.log(ev.deltaY);
        console.log(ev.deltaX);
      })
    })*/
