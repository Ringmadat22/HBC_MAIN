const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let counter = 0;
const size = slider.clientWidth;

nextBtn.addEventListener('click', () => {
  if (counter >= slider.children.length - 1) return; // Prevent sliding past the last item
  slider.style.transition = "transform 0.4s ease-in-out";
  counter++;
  slider.style.transform = `translateX(-${counter * size}px)`;
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return; // Prevent sliding past the first item
  slider.style.transition = "transform 0.4s ease-in-out";
  counter--;
  slider.style.transform = `translateX(-${counter * size}px)`;
});

// Optional: Resetting the transition if the user resizes the window
window.addEventListener('resize', () => {
  slider.style.transform = `translateX(-${counter * slider.clientWidth}px)`;
});
