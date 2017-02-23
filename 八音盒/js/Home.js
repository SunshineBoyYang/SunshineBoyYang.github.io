var swiper = new Swiper(".swiper-container",{
	pagination:".swiper-pagination",
	//点击小点滑动图片
	paginationClickable:".swiper-pagination",
	nextButton:".swiper-button-next",
	prevButton:".swiper-button-prev",
	//每页之间的间隔
	spaceBetween:1000,
	loop:true,   //循环轮播
	autoplay:2000
})

$("#logo").click(function(){
	window.location.href="music_box.html";
})
$("#married").get(0).click(function(){
	alert("jaj");
})
