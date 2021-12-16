/*
  ========================================
  Mobile menu (Dynamic HTML)
  ========================================
*/

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

/*
  ========================================
  Popup window (JS objects)
  ========================================
*/

const projectsObj = [
  {
    title: 'Tonic',
    company: 'Canopy',
    role: 'Back End Dev',
    year: '2015',
    image: 'img/popup-snapshoot.png',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto sint, quae sit nostrum accusamus magnam blanditiis iusto in ducimus eligendi voluptatibus commodi.',
    technologies: ['html', 'css', 'javascript'],
    live: '',
    source: '',
  },
  {
    title: 'Tonic',
    company: 'Canopy',
    role: 'Back End Dev',
    year: '2015',
    image: 'img/popup-snapshoot.png',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto sint, quae sit nostrum accusamus magnam blanditiis iusto in ducimus eligendi voluptatibus commodi.',
    technologies: ['html', 'css', 'javascript'],
    live: '',
    source: '',
  },
  {
    title: 'Tonic',
    company: 'Canopy',
    role: 'Back End Dev',
    year: '2015',
    image: 'img/popup-snapshoot.png',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto sint, quae sit nostrum accusamus magnam blanditiis iusto in ducimus eligendi voluptatibus commodi.',
    technologies: ['html', 'css', 'javascript'],
    live: '',
    source: '',
  },
  {
    title: 'Tonic',
    company: 'Canopy',
    role: 'Back End Dev',
    year: '2015',
    image: 'img/popup-snapshoot.png',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto sint, quae sit nostrum accusamus magnam blanditiis iusto in ducimus eligendi voluptatibus commodi.',
    technologies: ['html', 'css', 'javascript'],
    live: '',
    source: '',
  },
];

const btnOpen = Array.from(document.querySelectorAll('.portfolio__btn'));
const btnClose = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
// const popupWindow = document.querySelector('.popup__window');
const popupTitle = document.querySelector('.popup__title');
const popupCompany = document.querySelector('.popup__company');
const popupRole = document.querySelector('.popup__role');
const popupYear = document.querySelector('.popup__year');
const popupImage = document.querySelector('.popup__image');
const popupDescription = document.querySelector('.popup__description');
const popupTechnologies = document.querySelector('.popup__technologies');
const popupLive = document.querySelector('.popup__btn--live');
const popupSource = document.querySelector('.popup__btn--source');

const openPopup = (project) => {
  popupTitle.textContent = projectsObj[btnOpen.indexOf(project.target)].title;
  popupCompany.textContent = projectsObj[btnOpen.indexOf(project.target)].company;
  popupRole.textContent = projectsObj[btnOpen.indexOf(project.target)].role;
  popupYear.textContent = projectsObj[btnOpen.indexOf(project.target)].year;
  popupImage.src = projectsObj[btnOpen.indexOf(project.target)].image;
  popupDescription.textContent = projectsObj[btnOpen.indexOf(project.target)].description;
  popupTechnologies.innerHTML = '';

  for (
    let i = 0;
    i < projectsObj[btnOpen.indexOf(project.target)].technologies.length;
    i += 1
  ) {
    const li = document.createElement('li');
    li.innerHTML = `<li class="popup__tag">${
      projectsObj[btnOpen.indexOf(project.target)].technologies[i]
    }</li>`;
    popupTechnologies.appendChild(li);
  }

  popupLive.href = projectsObj[btnOpen.indexOf(project.target)].live;
  popupSource.href = projectsObj[btnOpen.indexOf(project.target)].source;

  popup.classList.toggle('popup--active');
};

const closePopup = () => {
  popup.classList.toggle('popup--active'); // Class in CSS only (visibility)
};

btnOpen.forEach((el) => {
  el.addEventListener('click', openPopup);
});
btnClose.addEventListener('click', closePopup);

/*
  ===============================================
  Validate contact form (Client side validation)
  ===============================================
*/

const form = document.querySelector('.contact__form');
const email = document.querySelector('.contact__input--email');
const error = document.querySelector('.form__error');

const isUppercase = (string) => string === string.toLowerCase();

form.addEventListener('submit', (event) => {
  if (isUppercase(email.value)) {
    error.classList.remove('form__error--message'); // Class in CSS only
  } else {
    event.preventDefault();
    error.classList.add('form__error--message'); // Class in CSS only
  }
});

/*
  =============================================
  Preserve data in the browser (Local storage)
  =============================================
*/

const userForm = {};

if ('userData' in localStorage) {
  const parsedJSON = JSON.parse(localStorage.userData);

  form.elements[0].value = parsedJSON.userName;
  form.elements[1].value = parsedJSON.UserEmail;
  form.elements[2].value = parsedJSON.userMessage;
}


