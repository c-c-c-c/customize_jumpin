$(function(){
    $(".color1").on("click", function() {
        $(".selectcolor1").slideToggle();
    });

    $(".color2").on("click", function() {
        $(".selectcolor2").slideToggle();
    });
 });


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

	console.log($('.container').offset().left);
	// $(".botanical_1").click(function(){
	$('.botanical').click(function(){
			$('.customizeImg').animate({opacity:0}, 1000);
			$('.customizeImg').animate({scale:"0"}, 10000);
			$('.customizeImgBouquetHandle').animate({opacity:1}, 2000);
			$(this).css({"display":"none"});

			var targetClass = buttonToFlowerConf[ $(this).attr("class").split(" ")[1]];
			console.log( $(this).attr("class").split(" ")[1]);

			console.log(targetClass);

			// この３つの座標で、花のジャンプインの軌道を決定
			var path = $.bezierCurve(80, 30).addPoint(130, -220).addPoint(280, -50);

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
	 		}, 300, "easeInOutCubic");//300:花の移動時間(スピード)

	});

	// Drag and Drop
	var panstartX;
	var panstartY;
	$('.custamizeBotanical').each(function (idx, $el) {
		var hammertime = new Hammer($el);
		hammertime.get('rotate').set({ enable: true })
		hammertime.get('pan').set({threshold: 2});

		hammertime.on('rotate', function (ev) {


		});


		hammertime.on('panstart', function(ev){
			panstartX = ev.target.x - Number($('.container').offset().left);
			panstartY = ev.target.y;

			ev.target.style.top = panstartY;
			ev.target.style.left = panstartX ;
		});



		hammertime.on('pan', function (ev) {
			 ev.preventDefault();
			 var target = ev.target;
			 target.style.top = ev.deltaY + panstartY  - 400 + 'px';
			 target.style.left = ev.deltaX + panstartX  + 'px';

		});
	})

	$('img').attr('onmousedown', 'return false');

});
