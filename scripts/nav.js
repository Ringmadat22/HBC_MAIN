document.addEventListener('DOMContentLoaded', function () {
    const topNav = document.querySelector('.top-nav');
    const lowerNav = document.querySelector('.lower-nav');
    let lastScrollY = window.scrollY;
    const threshold = 100; // Distance in px after which the navbar hides

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > threshold) {
            // If scrolling down past the threshold
            if (currentScrollY > lastScrollY) {
                // User is scrolling down, hide both navs
                topNav.classList.add('hide-nav');
                lowerNav.classList.add('hide-nav');
            } else {
                // User is scrolling up, show only the lower-nav
                lowerNav.classList.remove('hide-nav');
            }
        } else {
            // If we're back near the top of the page, show both navs
            topNav.classList.remove('hide-nav');
            lowerNav.classList.remove('hide-nav');
        }

        lastScrollY = currentScrollY;
    });

    // Hamburger menu functionality for mobile responsiveness
    const hamburger = document.getElementById('hamburger');
    const lowerNavbarContent = document.querySelector('.lower-navbar-container-content ul');

    hamburger.addEventListener('click', () => {
        lowerNavbarContent.classList.toggle('show');
    });
});
