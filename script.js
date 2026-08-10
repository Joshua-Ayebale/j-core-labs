// Select DOM elements
const track = document.querySelector('.student-hub');
const slides = document.querySelectorAll('card-StudentHub');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let currentIndex = 0;
const totalSlides = slides.length;

// Function to update the carousel position
function updateCarousel() {
  // Move the track to the left based on the current index
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Next Button Click Event
nextButton.addEventListener('click', () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++; // Move to next slide
  } else {
    currentIndex = 0; // Loop back to the first slide
  }
  updateCarousel();
});

// Previous Button Click Event
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--; // Move to previous slide
  } else {
    currentIndex = totalSlides - 1; // Loop to the last slide
  }
  updateCarousel();
});