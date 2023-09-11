// console.log('JS is working...');

// Menu
const menuImage = document.getElementById('menu');
const navMenu = document.getElementById('nav-menu');

function toggleMenuActive() {
	navMenu.classList.toggle('active');
}

menuImage.addEventListener('click', toggleMenuActive);

// Subscribe Button
const subscribeButton = document.getElementById('btn-subscribe');

subscribeButton.addEventListener('click', function () {
	// Display an alert when the button is clicked
	alert('Thank you for subscribing!');
});
