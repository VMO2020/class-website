// console.log('JS is working...');

const menuImage = document.getElementById('menu');
const navMenu = document.getElementById('nav-menu');

function toggleMenuActive() {
	navMenu.classList.toggle('active');
}

menuImage.addEventListener('click', toggleMenuActive);
