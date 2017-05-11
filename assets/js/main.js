document.getElementById("toogle").addEvenListener("click", fucntion(event)){
	event.preventDefault();
	document.getElementById("nav-header").classList.toogle("open");
	document.getElementById("body").classList.toogle("overflover-hidden");
};