'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');

///////////////////////////////////////
// Modal window

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Page Navigation
// ///////////////////////////////////////

btnScrollTo.addEventListener('click', function (event) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1- Add event listener to common parent element
// 2- Determine what element originated the event

document
  .querySelector('.nav__links')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const id = event.target.getAttribute('href');
    // Matching strategy
    if (event.target.classList.contains('nav__link')) {
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });

// Tabbed Component
// ///////////////////////////////////////

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (event) {
  const clicked = event.target.closest('.operations__tab');
  // Gard clause
  if (!clicked) return;
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // Activate Content Area
  tabsContent.forEach(content =>
    content.classList.remove('operations__content--active')
  );
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu Fade animation
// ///////////////////////////////////////

const handleHover = function (event) {
  if (event.target.classList.contains('nav__link')) {
    const link = event.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(element => {
      if (element !== link) element.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// nav.addEventListener('mouseover', function (event) {
//   handleHover(event, 0.5);
// });

// nav.addEventListener('mouseout', function (event) {
//   handleHover(event, 1);
// });

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky Navbar (Scroll method)
// ///////////////////////////////////////

// const initialCoords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function (event) {
//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

// Sticky Navbar with Intersection Observer API (more performant)
// ///////////////////////////////////////

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsOptions = {
//   root: null,
//   threshold: [0, 1, 0.2],
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// Reveal Sections
// ///////////////////////////////////////

const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    return;
  } else {
    entry.target.classList.remove('section--hidden');
  }
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// Lazy Loading Images
// ///////////////////////////////////////

const imgTargets = document.querySelectorAll('img[data-src]');
console.log(imgTargets);

const loadImg = function (entries, observer) {
  const [entry] = entries;
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
});

imgTargets.forEach(img => imgObserver.observe(img));

// ///////////////////////////////////////
// // Button scrolling
// btnScrollTo.addEventListener('click', function (event) {
//   // const s1coords = section1.getBoundingClientRect();
//   // console.log(s1coords);
//   // console.log(event.target.getBoundingClientRect());
//   // console.log('Current Scroll (X/Y)', window.pageXOffset, pageYOffset);
//   // console.log(
//   //   'height/width viewport',
//   //   document.documentElement.clientHeight,
//   //   document.documentElement.clientWidth
//   // );
//   // Scrolling
//   // window.scrollTo(
//   //   s1coords.left + window.pageXOffset,
//   //   s1coords.top + window.pageYOffset
//   // );
//   // window.scrollTo({
//   //   left: s1coords.left + window.pageXOffset,
//   //   top: s1coords.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // });
//   section1.scrollIntoView({ behavior: 'smooth' });
//   // only works in modern browsers
// });
