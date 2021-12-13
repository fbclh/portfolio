// Mobile menu (Dynamic HTML)
// const burgerIcon = document.querySelector('.nav__icon-open');
const openIcon = document.querySelector('.nav__icon-open');
const mobileMenu = document.querySelector('.nav__mobile-menu');
const closeIcon = document.querySelector('.nav__icon-close');
const menuLinks = document.querySelectorAll('.nav__mobile');

closeIcon.addEventListener('click', () => {
  mobileMenu.style.left = '-110%';
});

openIcon.addEventListener('click', () => {
  mobileMenu.style.left = '0';
});

// burgerIcon.addEventListener('click', () => {
//   mobileMenu.classList.toggle('test');
// });

// closeIcon.addEventListener('click', () => {
//   mobileMenu.classList.toggle('test');
// });

menuLinks.forEach((el) => {
  el.addEventListener('click', () => {
    mobileMenu.classList.toggle('test');
  });
});

//

// const mobileMenu = document.getElementById('menu');
// const closeIcon = document.getElementById('close-menu');
// const openIcon = document.getElementById('hamburger-icon');

// closeIcon.addEventListener('click', () => {
//   mobileMenu.style.left = '-110%';
// });

// openIcon.addEventListener('click', () => {
//   mobileMenu.style.left = '0';
// });

// document.querySelectorAll('.classList').forEach((item) => {
//   item.addEventListener('click', () => {
//     mobileMenu.style.left = '-110%';
//   });
// });

//

// Popup window (JS objects)

// Validate contact form (Client side validation)

// Preserve data in the browser (Local storage)
