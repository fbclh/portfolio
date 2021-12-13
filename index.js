// Mobile menu (Dynamic HTML)

// Popup window (JS objects)

// Validate contact form (Client side validation)

// Preserve data in the browser (Local storage)

//////////////////////////////////////////////////////////////////////////////

// 
const openIcon = document.querySelector('.nav__icon-open');
const mobileMenu = document.querySelector('.nav__mobile-menu');
const closeIcon = document.querySelector('.nav__icon-close');
const menuLinks = document.querySelectorAll('.nav__mobile');

closeIcon.addEventListener('click', () => {
  mobileMenu.style.left = '-100%';
});

openIcon.addEventListener('click', () => {
  mobileMenu.style.left = '0';
});

menuLinks.forEach((item) => {
  item.addEventListener('click', () => {
    mobileMenu.style.left = '-100%';
  });
});
