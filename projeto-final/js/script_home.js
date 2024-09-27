window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY;

    let opacity = Math.max(1 - scrollPosition / 500, 0.5);
    header.style.backgroundColor = `rgba(26, 61, 124, ${opacity})`;
});