var root = document.documentElement;
document.addEventListener("mousedown", ev=>{
	
	var el = ev.target,  top = 0, left = 0;

	do {
		top += el.offsetTop;
		left += el.offsetLeft;
	} while(el = el.offsetParent);

	var x = (ev.clientX - left) / ev.target.offsetWidth;
	var y = (ev.clientY - top) / ev.target.offsetHeight;
	root.style.setProperty("--ripple-x", x);
	root.style.setProperty("--ripple-y", y);
})