let slideIndex = 0; // Start from the first slide (index 0)
let slideInterval; // Variable to hold the interval ID for the automatic slideshow
let inactiveTimer; // Variable to hold the timeout ID for inactive period

// Function to display slides
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // Increment slide index
  slideIndex++;
  // Reset slide index if it exceeds the number of slides
  if (slideIndex > slides.length) {slideIndex = 1}
  // Display the current slide
  slides[slideIndex-1].style.display = "block";
}

// Start automatic slideshow
function startSlideShow() {
  slideInterval = setInterval(showSlides, 2000); // Change slide every 2 seconds
}

// Stop automatic slideshow
function stopSlideShow() {
  clearInterval(slideInterval);
}

// Reset inactive timer
function resetInactiveTimer() {
  clearTimeout(inactiveTimer);
  inactiveTimer = setTimeout(startSlideShow, 30000); // Restart slideshow after 30 seconds of inactivity
}

// Function to move to the next slide
function plusSlides(n) {
  stopSlideShow(); // Stop automatic slideshow when user interacts with buttons
  slideIndex += n;
  showSlides();
  resetInactiveTimer(); // Reset inactive timer after user interaction
}

// Function to navigate to a specific slide
function currentSlide(n) {
  stopSlideShow(); // Stop automatic slideshow when user interacts with buttons
  slideIndex = n;
  showSlides();
  resetInactiveTimer(); // Reset inactive timer after user interaction
}

// Start automatic slideshow when the page loads
window.onload = function() {
  startSlideShow(); // Start automatic slideshow
  resetInactiveTimer(); // Start inactive timer
};
