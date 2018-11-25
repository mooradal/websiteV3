particlesJS.load('particles-js', 'particlesjs-config2.json', function() {
	console.log('callback - particles.js config loaded');
});

var cards = document.querySelectorAll('.card-items');
var icons = document.querySelectorAll('.project-icon');

cards[0].addEventListener('click',() => {
	icons[0].style.animation = 'slideRight 1s ease-out 0s forwards';
});

cards[1].addEventListener('click',() => {
	icons[1].style.animation = 'slideRight 1s ease-out 0s forwards';
});

cards[2].addEventListener('click',() => {
	icons[2].style.animation = 'slideRight 1s ease-out 0s forwards';
});

cards[3].addEventListener('click',() => {
	icons[3].style.animation = 'slideRight 1s ease-out 0s forwards';
});

cards[4].addEventListener('click',() => {
	icons[4].style.animation = 'slideRight 1s ease-out 0s forwards';
});
