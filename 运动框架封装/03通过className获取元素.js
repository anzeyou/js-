function getByClass(oParent,sClass){
	//定义数组将符合class名称的元素保存起来
	var arr=[];
	//将所有的属于oParent的元素选出来
	var aEle=oParent.getElementsByTagName('*');//使用了*通配符--选取所有
	for(var i=0;i<aEle.length;i++){
		if(aEle[i].className==sClass){
			arr.push(aEle[i]);
		}
	}
	return arr;
}