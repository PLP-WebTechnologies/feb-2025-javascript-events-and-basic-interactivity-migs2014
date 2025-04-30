//Click to change color
function ChangeColor() {
  const button = document.getElementById("btnColor");
  button.style.backgroundColor = "coral";
  button.innerHTML = "Color changed!";
}
// Button Click Event
const clickButton = document.getElementById("clickButton");
clickButton.addEventListener("click", () => {

    alert("This button was clicked by you!");

});

// Hover Effects
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => {
  
    hoverBox.textContent = "Yes, hover!";
});
hoverBox.addEventListener("mouseout", () => {
  hoverBox.textContent = "Hover Me";
});

// Keypress Detection
const keyInfo = document.getElementById("keyInfo");
document.addEventListener("keydown", (event) => {
  keyInfo.textContent = `Key pressed: ${event.key}`;
});

// Bonus: Double-click and Long Press
const secretButton = document.getElementById("secretButton");
let pressTimer;

// Double-click detection
secretButton.addEventListener("dblclick", () => {
  alert("Double-click triggered the secret action!");
});

// Long press detection
secretButton.addEventListener("mousedown", () => {
  pressTimer = setTimeout(() => {
    alert("Long press triggered the secret action!");
  }, 1000); // 1-second long press
});

secretButton.addEventListener("mouseup", () => {
  clearTimeout(pressTimer); // Cancels the long press if released early
});
// Simple Image Gallery JavaScript

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
  // Get all required elements
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  
  // Current slide index
  let currentSlide = 0;
  
  // Show the selected slide
  function showSlide(index) {
      // Remove active class from all slides and dots
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      // Add active class to current slide and dot
      slides[index].classList.add('active');
      dots[index].classList.add('active');
      
      // Update current slide index
      currentSlide = index;
  }
  
  // Navigate to previous slide
  function prevSlide() {
      let newIndex = currentSlide - 1;
      if (newIndex < 0) newIndex = slides.length - 1;
      showSlide(newIndex);
  }
  
  // Navigate to next slide
  function nextSlide() {
      let newIndex = currentSlide + 1;
      if (newIndex >= slides.length) newIndex = 0;
      showSlide(newIndex);
  }
  
  // Event listeners for navigation buttons
  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);
  
  // Function to handle dot clicks (defined globally so it can be called from HTML)
  window.currentSlide = function(index) {
      showSlide(index);
  };
  
  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowLeft') {
          prevSlide();
      } else if (e.key === 'ArrowRight') {
          nextSlide();
      }
  });
  
  // Auto-advance slides every 4 seconds
  let slideInterval = setInterval(nextSlide, 4000);
  
  // Pause auto-advance when hovering over slideshow
  const slideshowContainer = document.querySelector('.slideshow-container');
  slideshowContainer.addEventListener('mouseenter', function() {
      clearInterval(slideInterval);
  });
  
  slideshowContainer.addEventListener('mouseleave', function() {
      slideInterval = setInterval(nextSlide, 4000);
  });
});
// form validation
document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const emailFeedback = document.getElementById("emailFeedback");
  const passwordFeedback = document.getElementById("passwordFeedback");

  let isValid = true;

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    emailFeedback.textContent = "Please enter a valid email address.";
    isValid = false;
  } else {
    emailFeedback.textContent = "";
  }

  // Password validation (minimum 8 characters)
  if (password.value.length < 8) {
    passwordFeedback.textContent = "Password must be at least 8 characters.";
    isValid = false;
  } else {
    passwordFeedback.textContent = "";
  }

  if (isValid) {
    alert("Form submitted successfully!");
  }
});

// Real-time feedback
document.getElementById("email").addEventListener("input", function() {
  const emailFeedback = document.getElementById("emailFeedback");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailFeedback.textContent = emailRegex.test(this.value) ? "" : "Invalid email format.";
});

document.getElementById("password").addEventListener("input", function() {
  const passwordFeedback = document.getElementById("passwordFeedback");
  passwordFeedback.textContent = this.value.length >= 8 ? "" : "Password too short.";
});