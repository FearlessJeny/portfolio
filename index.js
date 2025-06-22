

const navMenu = document.getElementById('nav-menu'),
  navOpen = document.getElementById('nav-open'),
  navClose = document.getElementById('nav-close');

// Show menu script
if (navOpen) {
  navOpen.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
};

// Close menu script

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
};



// Remove mobile menu after click to link
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}

navLink.forEach(e => e.addEventListener('click', linkAction));


// Scroll Header script

function scrollHeader() {
  const nav = document.getElementById('header');
  if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);



//  Dark\Light them

const themeButton = document.getElementById('theme-btn');
const darkTheme = 'light-theme';
const iconTheme = 'fa-moon';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'light' : 'dark'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-sun' : 'fa-moon'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'light' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'fa-sun' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
});

// Skills script

const skillsContent = document.getElementsByClassName('skills-content'),
      skillsHeader = document.querySelectorAll('.skills-header');
                              
      function toggleSkills() {
        const itemClass = this.parentNode.className

        for (i = 0; i < skillsContent.length; i++) {
          skillsContent[i].className = 'skills-content skills-close'
        }
        if (itemClass === 'skills-content skills-close') {
          this.parentNode.className = 'skills-content skills-open'
        }
      }

      skillsHeader.forEach((elements) => {
        elements.addEventListener('click', toggleSkills)
      });

      // qualification script

      const tabs = document.querySelectorAll('[data-target]'),
            tabContents = document.querySelectorAll('[data-content]');

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const target = document.querySelector(tab.dataset.target);

          tabContents.forEach(tabContents => {
            tabContents.classList.remove('qualification-active');
          });
          target.classList.add('qualification-active');

          tabs.forEach(tab => {
            tab.classList.remove('qualification-active');
          });
          tab.classList.add('qualification-active');
        });
      });


      // Services script

      const modalViews = document.querySelectorAll('.services-modal'),
            modalBtns = document.querySelectorAll('.services-button'),
            modalCloses = document.querySelectorAll('.services-modal-close');

      const modal = function (modalClick) {
            modalViews[modalClick].classList.add('active-modal');
       }

       modalBtns.forEach((modalBtn, i) => {
            modalBtn.addEventListener('click', () => {
              modal(i)
            });
       });

       modalCloses.forEach((modalClose) => {
        modalClose.addEventListener('click', () => {
          modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
          });
        });
       });


       //Portfolio swiper script

       var swiperPortfolio = new Swiper('.portfolio-container', {
           grabCursor: true,
           loop: true,

           navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
           },
           pagination: {
            el: '.swiper-pagination',
            clickable: true,
           }
       });


$(window).on('scroll', function () {
  $('.scroll-top').toggleClass('show', $(window).
  scrollTop() >=100);
});

$('.scroll-top').on('click', function () {
  $('html, body').stop().animate({scrollTop: 0},
    500);
});

let path = document.querySelector('.scroll-top path');
let length_path = path.getTotalLength();

path.style.strokeDasharray = length_path + " "  + length_path;
path.style.strokeDashoffset = length_path;
path.getBoundingClientRect();
path.style.transition = path.style.WebkitTransition = "stroke-dashoffset 10ms linear";

function updateScrollTop() {
  let offset = $(document).height() - $(window).height();
  path.style.strokeDashoffset = length_path - ($(window).scrollTop() * length_path) / offset;
}

updateScrollTop();
$(window).scroll(updateScrollTop);


// Scrool section active link script

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
          sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-menu a[href*=' + sectionId +']').classList.add('active-link')
    } else {
      document.querySelector('.nav-menu a[href*=' + sectionId +']').classList.remove('active-link')
    };
  });
}

window.addEventListener('scroll', scrollActive);


// aos Animate on scroll library

AOS.init({
  delay: 400,
  duration: 1000
});