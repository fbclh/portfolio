// Mobile menu (Dynamic HTML)

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

menuLinks.forEach((el) => {
  el.addEventListener('click', () => {
    mobileMenu.style.left = '-100%';
  });
});

// Popup window (JS objects)

// Objects/Array
// const projectOne = {
//   name: 'Tonic',
//   description:
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//   image: '',
//   technologies: '',
//   live: '',
//   source: '',
// };

//

// Information for Modals through objects

//

// You should implement the following interactions:
// When the user clicks (or taps) the button to check project details, the popup with details about the project appears.
// When the user clicks (or taps) the close (X) button, the popup disappears.

// In order to associate each project with the popup window details, you must use a JavaScript array to store all of the information for all projects.

// For each project you need to store the following pieces of data in a JavaScript object, at a minimum: name, description, featured image, technologies, link to live version, link to source.
// You need to update the main page so that the projects section is created dynamically using the information stored in that JavaScript object. Remember, all of the HTML in that section is created when the page loads.
// After that, you could implement the popup window.

// Validate contact form (Client side validation)

// Preserve data in the browser (Local storage)
