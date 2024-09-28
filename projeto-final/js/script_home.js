window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY;

const hamburger = document.getElementById('hamburger');
const topNav = document.querySelector('.top-nav');

hamburger.addEventListener('click', () => {
    topNav.classList.toggle('active');
});
});