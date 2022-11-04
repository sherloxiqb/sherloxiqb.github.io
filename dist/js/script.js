// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// Carousel Portfolio
var sliderContainer = document.getElementById('sliderContainer');
var slider = document.getElementById('slider');
var cards = slider.getElementsByTagName('li');

var elementsToShow = 3;
if (document.body.clientWidth < 1000) {
  elementsToShow = 1;
} else if (document.body.clientWidth < 1500) {
  elementsToShow = 2;
}

var sliderContainerWidth = sliderContainer.clientWidth;

var cardWidth = sliderContainerWidth / elementsToShow;

slider.style.width = cards.length * cardWidth + 'px';
slider.style.transition = 'margin';
slider.style.transitionDuration = '1s';

for (var index = 0; index < cards.length; index++) {
  const element = cards[index];
  element.style.width = cardWidth + 'px';
}

function next() {
  if (+slider.style.marginLeft.slice(0, -2) != -cardWidth * (cards.length - elementsToShow)) slider.style.marginLeft = +slider.style.marginLeft.slice(0, -2) - cardWidth + 'px';
}

function prev() {
  if (+slider.style.marginLeft.slice(0, -2) != 0) slider.style.marginLeft = +slider.style.marginLeft.slice(0, -2) + cardWidth + 'px';
}

function autoPlay() {
  prev();

  if (+slider.style.marginLeft.slice(0, -2) === -cardWidth * (cards.length - elementsToShow)) {
    slider.style.marginLeft = '0px';
  }

  setTimeout(() => {
    autoPlay();
  }, 3000);
}

setTimeout(() => {
  autoPlay();
}, 3000);
