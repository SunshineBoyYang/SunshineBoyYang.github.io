/*
 * 滚轮事件
 */

function MousewheelHandle(obj,handle){
	var info = navigator.userAgent;
	var down = null;  //用来记录滚轮的上下
	if (info.indexOf("Firefox") != -1) {
		obj.addEventListener("DOMMouseScroll",function(event){
			var ev = event || window.event;
			if (ev.detail > 0) {
				//不做具体的事情
				down = true;
			} else{
				down = false;
			}
			//调用外部传递的事件处理程序
//			handle(down,ev);
			//apply:每一个函数都有一个子代的方法叫apply.这个方法可以切换函数的运行环境,如果函数
			//需要传递参数,以数组的形式传递
			handle.apply(obj,[down,ev]);
			
			
		},false);
	}else{
		obj.onmousewheel = function(event){
			var ev = event || window.event;
			if (ev.wheelDelta > 0) {
				down = false;
			} else{
				down = true;
			}
			
//			handle(down,ev);

			//call:每个函数也都有一个call方法,他的功能和apply一样,都可以实现切换一个函数的调用者(运行环境)
			//call和apply唯一的区别在于:函数有参数的时候,传递方式不一样,call依次传递参数,参数用逗号隔开即可
			handle.call(obj,down,ev);
		}
	}
}
