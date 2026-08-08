const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.style.background = window.scrollY > 40
    ? 'rgba(7,3,10,.88)'
    : 'linear-gradient(#07030add,transparent)';
});
