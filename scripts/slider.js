const images = [
    {
      large: '../images/large.png',
      small1: '../images/mini.jpg',
      small2: '../images/mini2.jpg',
      title: 'Fashion & Style',
      description: 'Shop everything about fashion and style. Discover the latest trends.'
    },
    {
      large: '../images/large2.png',
      small1: '../images/mini3.jpg',
      small2: '../images/mini4.jpg',
      title: 'Casual Wear',
      description: 'Comfort meets style. Shop casual wear for everyday adventures.'
    },
    {
      large: '../images/large3.jpg',
      small1: '../images/mini5.jpg',
      small2: '../images/mini.jpg',
      title: 'Formal Wear',
      description: 'Dress to impress. Explore our collection of formal wear.'
    }
  ];

  let currentIndex = 0;

  function updateCarousel() {
    const largeImage = document.getElementById('largeImage');
    const smallImage1 = document.getElementById('smallImage1');
    const smallImage2 = document.getElementById('smallImage2');
    const imageTitle = document.getElementById('imageTitle');
    const imageDescription = document.getElementById('imageDescription');

    // Update the images and text
    largeImage.style.backgroundImage = `url(${images[currentIndex].large})`;
    smallImage1.style.backgroundImage = `url(${images[currentIndex].small1})`;
    smallImage2.style.backgroundImage = `url(${images[currentIndex].small2})`;
    imageTitle.textContent = images[currentIndex].title;
    imageDescription.textContent = images[currentIndex].description;

    // Change index for the next image
    currentIndex = (currentIndex + 1) % images.length;
  }

  // Initial call to set the first images
  updateCarousel();

  // Update images every 5 seconds
  setInterval(updateCarousel, 5000);