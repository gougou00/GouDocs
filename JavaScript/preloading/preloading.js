(function() {
	function preloadingImages() {
		$$('img[rel="preloadZoom"]').each(function(img) {
			var testimg = new Image();
			testimg.src = img.src.replace(/(\.\w+$)/, '_small$1');
		});
	}

	document.observe('dom:loaded', preloadingImages);

	function togglePreloaded(e) {
		var trigger = e.findElement('img[rel="preloadZoom"]');
		if (!trigger) return;
		if (e.type == 'mouseover') {
			trigger.src = trigger.src.replace(/(\.\w+$)/, '_small$1');
		} else {
			trigger.src = trigger.src.replace('_small', '');
		}
	}

	document.observe('mouseover', togglePreloaded).
	observe('mouseout', togglePreloaded);
})();