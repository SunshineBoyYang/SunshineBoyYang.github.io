//点击返回顶部
function ontop(){
	$("#click").click(function(){
		$("body").animate({scrollTop:0},200);
	});
}
ontop();

$("#logo").click(function(){
		window.location.href="music_box.html";
})
