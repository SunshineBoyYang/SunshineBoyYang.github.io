
$(document).ready(function(){
//	alert($(window).height()); 
//	alert($(document).height()); 
//	alert($(document).scrollTop()); 
	var win_height=$(window).height();
	var doc_height=$(document).height();
	$("#start_make").css({display:"none"});
	
	//点击小图标返回music_box
	$("#logo").click(function(){
		window.location.href="music_box.html";
	})
	//浏览更多热门故事
	$("#browse").click(function(){
		window.location.href="http://www.wedfairy.com/explore";
	})
	//开始制作
	$("#make_start").click(function(){
		window.location.href="http://www.wedfairy.com/my";
	})
	//了解更多
	$("#make_more").click(function(){
		window.location.href="#create";
	})
	//开始制作
	$("#start_make").click(function(){
		window.location.href="http://www.wedfairy.com/my";
	})
	//点击图片到首页
	$("#else_leftimg").find("div").click(function(){
		window.location.href="Home.html";
	})
	$("#else_rightimg").find("div").click(function(){
		window.location.href="Home.html";
	})
	
	window.onscroll=function(){
		var scroll_top=$(document).scrollTop();
		//隐藏导航栏
		if (scroll_top > 200) {
			$("#navigation").animate({opacity:0},20);
		}
		//打开导航栏
		if (scroll_top < 200) {
			$("#navigation").animate({opacity:1},20);
		}
		//显示开始制作
		if (scroll_top > 1992) {
			$("#start_make").css({display:"block"});
		}
		if (scroll_top < 1967) {
			$("#start_make").css({display:"block"});
		}
		//隐藏开始制作
		if (scroll_top > 4236) {
			$("#start_make").css({display:"none"});
		}
		if (scroll_top < 1647) {
			$("#start_make").css({display:"none"});
		}
		//设置中间手机的position
		if (scroll_top > 2035) {
			$("#flower_img").css({position:"fixed"});
			$("#flower_font").css({position:"relative",left:"45%"});
		}
		if (scroll_top < 2035) {
			$("#flower_img").css({position:"relative",top:"10%"});
			$("#flower_font").css({position:"relative",left:"0px"});
		}
		if (scroll_top > 3576) {
			$("#flower_img").css({position:"relative",top:"70%"});
			$("#flower_font").css({position:"relative",left:"0px"});
		}
		if (scroll_top < 3576 && scroll_top > 2035) {
			$("#flower_img").css({position:"fixed",top:"15%"});
			$("#flower_font").css({position:"relative",left:"45%"});
		}
	}
    
});

	
