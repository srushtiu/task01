
window.addEventListener('scroll', () => {
  const about = document.querySelector('.about-text');
  const aboutPos = about.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.2;

  if (aboutPos < screenPos) {
    about.classList.add('fade-in');
  }
});
