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

$(document).ready(function(){

	$(function(){
			var path = $.bezierCurve(100, 450).addPoint(200, 80).addPoint(250, 230);



			$(".botanical_1").animate({
	    	bezierPath: path,
				scale:'1',
				opacity:'1'
	 		}, 400, "easeInOutCubic");

			console.log($("#botanical_1"));
	});
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
