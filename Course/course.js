var openMenu = document.querySelector('#open-menu');
var navBar = document.querySelector('.nar-bar');
var close = document.querySelector('#close');
openMenu.addEventListener('click', function () {
	navBar.style.transform = 'translateX(0)';
	var list = document.querySelectorAll('.nar-bar__list');
	list.forEach((step, i) => step.classList.add('animate__lightSpeedInRight'));
	var img = document.querySelector('.nar-bar__img');
	img.classList.add('animate__rotateInDownLeft');
});

close.addEventListener('click', function () {
	navBar.style.transform = 'translateX(300px)';
});

window.onscroll = function () {
	scrollFunction();
};
function scrollFunction() {
	if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
		document.querySelector('.header__logo img').style.display = 'none';
	} else {
		document.querySelector('.header__logo img').style.display = 'unset';
	}
}
