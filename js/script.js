const header = document.querySelector("header");
let menu = document.querySelector('#menu-icon');
window.addEventListener ("scroll", ()=> {
	if (window.scrollY > 30)
	{
		header.classList.add('sticky');
		menu.style.color = 'black';
	}
	else
	{
		header.classList.remove('sticky');
		menu.style.color = 'white';
	}
})


let navbar = document.querySelector('.navbar');
menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};