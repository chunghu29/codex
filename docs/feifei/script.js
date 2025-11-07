const navToggle = document.querySelector('.site-nav__toggle');
const navList = document.querySelector('.site-nav__list');
const yearEl = document.getElementById('year');

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('is-open');
  });

  navList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navList.classList.remove('is-open');
    });
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
