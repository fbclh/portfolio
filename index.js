// Mobile menu (Dynamic HTML)
const burgerIcon = document.querySelector('.nav__icon-open');
const mobileMenu = document.querySelector('.nav__mobile-menu');
const closeIcon = document.querySelector('.nav__icon-close');
const menuLinks = document.querySelectorAll('.nav__mobile');

burgerIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('test');
});

closeIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('test');
});

menuLinks.forEach((el) => {
  el.addEventListener('click', () => {
    mobileMenu.classList.toggle('test');
  });
});

// Popup window (JS objects)

// Validate contact form (Client side validation)

// Preserve data in the browser (Local storage)
