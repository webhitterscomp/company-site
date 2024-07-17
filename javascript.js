
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);
function toggleMenu() {
  var navbar = document.getElementById('navbar');
  navbar.classList.toggle('active');
}

// =======================slider==============================

document.addEventListener('DOMContentLoaded', function () {
  // Select all sliders on the page
  const sliders = document.querySelectorAll('.slider');

  // Loop through each slider
  sliders.forEach(function(slider) {
    const slides = slider.querySelector('.slides');
    const slide = slider.querySelectorAll('.slide');

    let index = 0;
    const totalSlides = slide.length;

    function nextSlide() {
      index++;
      if (index >= totalSlides) {
        index = 0;
      }
      updateSlide();
    }

    function updateSlide() {
      slides.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(nextSlide, 2000); // Change slide every 2 seconds
  });
});


const questions = document.querySelectorAll('.first-question1');
const answers = document.querySelectorAll('.first-question2');

questions.forEach((question, index) => {
  question.addEventListener('click', function () {
    const answer = answers[index];
    if (answer.classList.contains('show')) {
      answer.classList.remove('show');
    } else {
      answers.forEach(ans => ans.classList.remove('show')); // Hide all answers first
      answer.classList.add('show');
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll('.numberdiv h1');
  const speed = 1000; // The lower the number, the faster the count

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;

      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };

    counter.setAttribute('data-target', counter.innerText);
    counter.innerText = '0';
    updateCount();
  });
});
 
document.addEventListener('DOMContentLoaded', function() {
  // Configuration
  var sliderContainer = document.querySelector('.slider-container');
  var slides = sliderContainer.children;
  var slideCount = slides.length;
  var slideWidth = slides[0].offsetWidth; // Assuming all slides have the same width
  var slideDuration = 3000; // Duration between slides (in milliseconds)
  var currentIndex = 0;
  var intervalId; // Variable to hold interval ID

  // Auto slider function
  function autoSlide() {
      intervalId = setInterval(function() {
          currentIndex = (currentIndex + 1) % slideCount;
          sliderContainer.style.transition = 'transform 1s ease-in-out';
          sliderContainer.style.transform = 'translateX(' + (-currentIndex * slideWidth) + 'px)';
      }, slideDuration);
  }

  // Initialize auto slider
  autoSlide();

  // Pause slider on hover
  sliderContainer.addEventListener('mouseenter', function() {
      clearInterval(intervalId);
  });

  // Resume slider on mouse leave
  sliderContainer.addEventListener('mouseleave', function() {
      autoSlide();
  });
});
 // Selecting elements
const form = document.getElementById('form-container');
const enrollBtn = document.querySelector('.btn-div');
const closeButton = document.getElementById('close-button');

// Function to toggle form visibility
function toggleForm() {
    form.style.display = (form.style.display === 'none') ? 'block' : 'none';
}

// Event listeners
enrollBtn.addEventListener('click', toggleForm);
closeButton.addEventListener('click', toggleForm);


