setInterval(function(){
	document.querySelector('body').style='filter: invert(1) hue-rotate(180deg) brightness(.75) saturate(1.4)';
	document.querySelectorAll('img, video, .bg-header-main').forEach(function(revert) { revert.style='filter: invert(1) hue-rotate(180deg) brightness(1) saturate(.6)'; });
	document.querySelectorAll('iframe, .article-ad-placeholder, [data-ad-type], [data-ad-position]').forEach(function(remove) { remove.remove(); });
}, 1000);
