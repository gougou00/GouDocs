var gou = {};
	gou.$ = function(id){
		return document.getElementById(id);
	};
	gou.getElementsByClassName = function(className, element) {
		if(document.getElementsByClassName){
			return (element || document).getElementsByClassName(className)
		}
		var children = (element || document).getElementsByTagName('*');
		var elements = [];	 
		for (var i = 0; i < children.length; i++) {
			var child = children[i];
			var classNames = child.className.split(' ');
			for (var j = 0; j < classNames.length; j++) {
				if (classNames[j] == className) {
					elements.push(child);
					break;
				}
			}
		}
		return elements;
	};
	gou.addListener = function(target,type,handler){
		if(target.addEventListener){
			target.addEventListener(type,handler,false);
		}else if(target.attachEvent){
			target.attachEvent("on"+type,handler);
		}else{
			target["on"+type]=handler;
		}
	};

	//定义数据
	gou.data = [
		 ["photo01.jpg","thumb01.jpg"]
		,["photo02.jpg","thumb02.jpg"]
		,["photo03.jpg","thumb03.jpg"]
		,["photo04.jpg","thumb04.jpg"]
		,["photo05.jpg","thumb05.jpg"]
		,["photo06.jpg","thumb06.jpg"]
		,["photo07.jpg","thumb07.jpg"]
		,["photo01.jpg","thumb01.jpg"]
		,["photo02.jpg","thumb02.jpg"]
		,["photo03.jpg","thumb03.jpg"]
		,["photo04.jpg","thumb04.jpg"]
		,["photo05.jpg","thumb05.jpg"]
		,["photo06.jpg","thumb06.jpg"]
		,["photo07.jpg","thumb07.jpg"]
	];
	gou.showNumber = 0;		//默认显示
	gou.groupNumber = 1;	//当前显示的组
	gou.groupSize = 6;		//每组的数量
	gou.showThumb = function(group){
		var ul = gou.$("smallPhotoList");
			ul.innerHTML = '';
		var start = (group-1)*gou.groupSize;
		var end = group*gou.groupSize
		for(var i=start;(i<end&&i<gou.data.length);i++){
			var li = document.createElement("li");
				li.innerHTML = 
				'<img src="'+gou.data[i][1]+'" id="thumb'+i+'" width="80" height="40"/>';
			ul.appendChild(li);
		}
	};
	gou.init = function() {
		gou.showThumb(1);
	};
	gou.init();