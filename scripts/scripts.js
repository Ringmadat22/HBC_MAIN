document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Show or hide the button based on the scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            // Show the button when scrolled down 300px
            scrollToTopBtn.classList.add('show');
        } else {
            // Hide the button when near the top
            scrollToTopBtn.classList.remove('show');
        }
    });

    // Scroll smoothly to the top when the button is clicked
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll to the top
        });
    });
});