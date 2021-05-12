const menuToggle = document.querySelector('.toggle');
const nav = document.querySelector('.navigation');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('toggle--active');
  nav.classList.toggle('navigation--active');
});
