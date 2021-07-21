"use strict";

// overlay 
gsap.to(".overlay h1", {
  duration: 2,
  opacity: 0,
  y: "-100%",
  ease: Expo.easeIn
});
gsap.to(".overlay span", {
  duration: 2,
  delay: .4,
  opacity: 0,
  y: "-100%",
  ease: Expo.easeIn
});
gsap.to(".overlay", {
  duration: 2,
  delay: .8,
  y: "-100%",
  ease: Expo.easeInOut
});
gsap.from(".nav_logo", {
  duration: 2,
  delay: 1,
  opacity: 0,
  ease: Expo.easeInOut
});
gsap.from(".nav_toggle", {
  duration: 2,
  delay: 1,
  opacity: 0,
  rotation: 90,
  ease: Expo.easeIn
});
gsap.from(".nav_item", {
  duration: 2,
  delay: 1,
  opacity: 0,
  ease: Expo.easeIn
});
gsap.from('.home_image', {
  opacity: 0,
  duration: 2,
  delay: 1.5,
  y: -100,
  ease: Expo.easeInOut
});
gsap.from('.home_social', {
  opacity: 0,
  duration: 2,
  delay: 1.5,
  x: -100,
  ease: Expo.easeInOut
});
gsap.from('.home_data', {
  opacity: 0,
  duration: 2,
  delay: 1.5,
  x: 100,
  ease: Expo.easeInOut
});
gsap.from('.home_scroll', {
  opacity: 0,
  duration: 2,
  delay: 1.5,
  y: 100,
  ease: Expo.easeInOut
}); // TweenMax.from(".container_right", 2, {
//     delay: 2,
//     width: "0",
//     opacity: "0",
//     ease: Expo.easeInOut
// })
// TweenMax.from(".container_center", 2, {
//     delay: 3,
//     width: "0",
//     x: -20,
//     ease: Expo.easeInOut
// })
// cursor 
// const mCursor = document.querySelector('.cursor');
// navLinks = document.querySelectorAll('.nav_link li');
// window.addEventListener('mousemove', cursor);
// function cursor(c) {
//     mCursor.style.top = c.pageY + "px";
//     mCursor.style.left = c.pageX + "px";
// }
// nav toggle close open

var navMenu = document.getElementById('nav_menu'),
    navToggle = document.getElementById('nav_toggle'),
    navClose = document.getElementById('nav_close');
navToggle.addEventListener('click', function () {
  navMenu.classList.toggle('show_menu');
});
navClose.addEventListener('click', function () {
  navMenu.classList.remove('show_menu');
}); // nav menu close when click on item 

var navLink = document.querySelectorAll('.nav_link');

function linkAction() {
  var navMenu = document.getElementById('nav_menu');
  navMenu.classList.remove('show_menu');
}

navLink.forEach(function (n) {
  return n.addEventListener('click', linkAction);
}); // on scroll 

function scrollHeader() {
  var nav = document.getElementById('header');
  if (this.scrollY >= 80) nav.classList.add('scroll_header');else nav.classList.remove('scroll_header');
}

window.addEventListener('scroll', scrollHeader); // scroll to top 

function scrollTop() {
  var scrollTop = document.getElementById('scroll_top');
  if (this.scrollY >= 400) scrollTop.classList.add('show_scroll');else scrollTop.classList.remove('show_scroll');
}

window.addEventListener('scroll', scrollTop); // dark mode 

var themeButton = document.getElementById('change_theme');
var darkTheme = 'dark-theme';
var iconTheme = 'uil-sun'; // Previously selected topic (if user selected)

var selectedTheme = localStorage.getItem('selected-theme');
var selectedIcon = localStorage.getItem('selected-icon'); // We obtain the current theme that the interface has by validating the dark-theme class

var getCurrentTheme = function getCurrentTheme() {
  return document.body.classList.contains(darkTheme) ? 'dark' : 'light';
};

var getCurrentIcon = function getCurrentIcon() {
  return themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';
}; // We validate if the user previously chose a topic


if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
} // Activate / deactivate the theme manually with the button


themeButton.addEventListener('click', function () {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme); // We save the theme and the current icon that the user chose

  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});