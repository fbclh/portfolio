// Mobile menu (Dynamic HTML)

const openIcon = document.querySelector('.nav__icon-open');
const closeIcon = document.querySelector('.nav__icon-close');
const mobileMenu = document.querySelector('.nav__mobile-menu');
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

const projects = [
  {
    title: 'Tonic',
    company: 'Canopy',
    role: 'Back End Dev',
    year: '2015',
    image: '',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto sint, quae sit nostrum accusamus magnam blanditiis iusto in ducimus eligendi voluptatibus commodi, ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto sint, quae sit nostrum accusamus magnam blanditiis iusto in ducimus eligendi voluptatibus commodi.',
    technologies: ['html', 'css', 'javaScript'],
    live: '',
    source: '',
  },
  {
    title: 'Tonic',
    company: 'Canopy',
    role: 'Back End Dev',
    year: '2015',
    image: '',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto sint, quae sit nostrum accusamus magnam blanditiis iusto in ducimus eligendi voluptatibus commodi, ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto sint, quae sit nostrum accusamus magnam blanditiis iusto in ducimus eligendi voluptatibus commodi.',
    technologies: ['html', 'css', 'javaScript'],
    live: '',
    source: '',
  },

  {
    title: 'Tonic',
    company: 'Canopy',
    role: 'Back End Dev',
    year: '2015',
    image: '',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto sint, quae sit nostrum accusamus magnam blanditiis iusto in ducimus eligendi voluptatibus commodi, ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto sint, quae sit nostrum accusamus magnam blanditiis iusto in ducimus eligendi voluptatibus commodi.',
    technologies: ['html', 'css', 'javaScript'],
    live: '',
    source: '',
  },

  {
    title: 'Tonic',
    company: 'Canopy',
    role: 'Back End Dev',
    year: '2015',
    image: '',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto sint, quae sit nostrum accusamus magnam blanditiis iusto in ducimus eligendi voluptatibus commodi, ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto sint, quae sit nostrum accusamus magnam blanditiis iusto in ducimus eligendi voluptatibus commodi.',
    technologies: ['html', 'css', 'javaScript'],
    live: '',
    source: '',
  },
];

const btnOpen = document.querySelectorAll('.portfolio__btn'); // Removed Array
const btnClose = document.querySelector('.popup__icon-close');
const popup = document.querySelector('.popup');
const popupWindow = document.querySelector('.popup__window');
const popupTitle = document.querySelector('.popup__title');
const popupCompany = document.querySelector('.popup__company');
const popupRole = document.querySelector('.popup__role');
const popupYear = document.querySelector('.popup__year');
const popupImage = document.querySelector('.popup__img');
const popupDescription = document.querySelector('.popup__description');
const popupTechnologies = document.querySelector('.popup__technologies');
const popupLive = document.querySelector('.popup__btn--live');
const popupSource = document.querySelector('.popup__btn--source');

const openPopup = () => {};

const closePopup = () => {};

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
