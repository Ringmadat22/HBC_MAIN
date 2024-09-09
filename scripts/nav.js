let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');  // Main navigation bar
const topNav = document.querySelector('.top-nav'); // Top navigation

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scroll down - hide both navbar and top-nav
        navbar.classList.add('hide-navbar');
        topNav.classList.add('hide-navbar');
    } else {
        // Scroll up - show both navbar and top-nav
        navbar.classList.remove('hide-navbar');
        topNav.classList.remove('hide-navbar');
    }
    
    lastScrollTop = scrollTop;
});