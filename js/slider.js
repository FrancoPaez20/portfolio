const works = document.querySelectorAll('.items').forEach(item => {

	item.addEventListener("mousedown", (e) => {

		isDown = true;
		startX = e.pageX - item.offsetLeft;
		scrollLeft = item.scrollLeft;
	});

	item.addEventListener("mouseleave", () => {

		isDown = false;
	});

	item.addEventListener("mouseup", () => {

		isDown = false;
	});

	item.addEventListener("mousemove", (e) => {

		if (!isDown) return;
		e.preventDefault();
		const x = e.pageX - item.offsetLeft;
		const walk = (x - startX) * 4;
		item.scrollLeft = scrollLeft - walk;
	});
})

let isDown = false;
let startX;
let scrollLeft;