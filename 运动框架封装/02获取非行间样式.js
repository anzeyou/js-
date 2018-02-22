//需要注意的是：这种方法不能获取复合样式

function getStyle(obj,name){
	//obj--需要获取样式的对象名称，name--样式名
	//IE
	if(obj.currentStyle){
		return obj.currentStyle[name];
	}
	//FF
	else{
		return getComputedStyle(obj,false)[name];
	}
}