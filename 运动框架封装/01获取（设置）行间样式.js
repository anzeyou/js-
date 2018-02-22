function css(obj,name,value){
	if(arguments.length==2){
		alert(obj.style[name]);
	}else{
			obj.style[name]=value;
		}
}