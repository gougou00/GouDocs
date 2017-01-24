var gou = {};
gou.$ = function(id) {
	return document.getElementById(id);
};
gou.getElementsByClassName = function(className, element) {
	if (document.getElementsByClassName) {
		return (element || document).getElementsByClassName(className);
	}
	var children = (element || document).getElementsByClassName('*');
	var element = [];
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
gou.addListener = function(target, type, handler) {
	if (target.addEventListener) {
		target.addEventListener(type, handler, false);
	} else if (target.attachEvent) {
		target.attachEvent("on" + type, handler);
	} else {
		target["on" + type] = handler;
	}
};

// 定义数据
gou.data = [
	["photo01.jpg", "thumb01.jpg"],
	["photo02.jpg", "thumb02.jpg"],
	["photo03.jpg", "thumb03.jpg"],
	["photo04.jpg", "thumb04.jpg"],
	["photo05.jpg", "thumb05.jpg"],
	["photo06.jpg", "thumb06.jpg"],
	["photo07.jpg", "thumb07.jpg"],
	["photo01.jpg", "thumb01.jpg"],
	["photo02.jpg", "thumb02.jpg"],
	["photo03.jpg", "thumb03.jpg"],
	["photo04.jpg", "thumb04.jpg"],
	["photo05.jpg", "thumb05.jpg"],
	["photo06.jpg", "thumb06.jpg"],
	["photo07.jpg", "thumb07.jpg"]
];
gou.showNumber = 0;
gou.groupNumber = 1;
gou.groupSize = 6;
gou.showThumb = function(group) {
	var ul = gou.$("smallPhotoList");
	ul.innerHTML = '';
	var start = (group - 1) * gou.groupSize;
	var end = group * gou.groupSize;
	for (var i = start; (i < end && i < gou.data.length); i++) {
		var li = document.createElement("li");
		li.innerHTML =
		'<img src="'+gou.data[i][1]+'" id="thumb'+i+'" width="80" height="40"/>';
		(function(i) {
			gou.addListener(li, "click", function() {
				// 增加click监听
				gou.showNumber = i;
				// 记录选中的图标序号，供其他函数调用
				gou.showBig();
			});
		})(i);	// 将i作为值传递进去
		ul.appendChild(li);
	}
};
// 显示大图
gou.showBig = function() {
	gou.$("bigPhotoSrc").src = gou.$("thumb" + gou.showNumber).src.
	replace("thumb", "photo");
}
gou.init = function() {
	gou.showThumb(1);
	gou.addListener(gou.$("next"), "click", function() {
		gou.nextThumb();
	});
	gou.addListener(gou.$("previous"), "click", function() {
		gou.previousThumb();
	});
	gou.addListener(document, "keyup", function(e) {
		e = e || event;
		if (e.keyCode === 37) {
			gou.previousPhoto();
		}
		if (e.keyCode === 39) {
			gou.nextPhoto();
		}
	});
};
gou.init();
// 显示下一组小图列表
gou.nextThumb = function() {
	if ((gou.groupNumber * gou.groupSize) + 1 <= gou.data.length) {
		gou.showThumb(gou.groupNumber + 1);
		gou.showNumber = gou.groupNumber * gou.groupSize;
		gou.showBig();
		gou.groupNumber++;
	}
};
// 显示上一组小图列表
gou.previousThumb = function() {
	if (gou.groupNumber - 1 >= 1) {
		gou.showThumb(gou.groupNumber - 1);
		gou.groupNumber--;
		gou.showNumber = gou.groupNumber * gou.groupSize - gou.groupSize;
		gou.showBig();
	}
};
gou.nextPhoto = function() {
	if (gou.showNumber % gou.groupSize === (gou.groupSize - 1)) {
		gou.nextThumb();
	} else if (gou.showNumber < gou.data.length - 1) {
		gou.showNumber++;
		gou.showBig();	// 显示大图
	}
};
gou.previousPhoto = function() {
	if (gou.showNumber === ((gou.groupNumber - 1) * gou.groupSize)) {
		gou.previousThumb();
	} else if (gou.showNumber > 0) {
		gou.showNumber--;
		gou.showBig();
	}
};