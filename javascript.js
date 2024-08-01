
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

  const sliders = document.querySelectorAll('.slider');


  sliders.forEach(function (slider) {
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

    setInterval(nextSlide, 2000);
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
      answers.forEach(ans => ans.classList.remove('show'));
      answer.classList.add('show');
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll('.numberdiv h1');
  const speed = 3300;
  let maxTarget = 0;
  let completedCounters = 0;


  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target-02');
    if (target > maxTarget) {
      maxTarget = target;
    }
  });

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target-02');
    const increment = target / speed;

    const updateCount = () => {
      let count = +counter.innerText;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, speed / maxTarget);
      } else {
        counter.innerText = target;
        completedCounters++;

        if (completedCounters === counters.length) {

        }
      }
    };

    counter.innerText = '0';
    updateCount();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll('.numberdiv h1');
  const speed = 3000;
  let maxTarget = 0;
  let completedCounters = 0;


  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target-03');
    if (target > maxTarget) {
      maxTarget = target;
    }
  });

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target-03');
    const increment = target / speed;

    const updateCount = () => {
      let count = +counter.innerText;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, speed / maxTarget);
      } else {
        counter.innerText = target;
        completedCounters++;


        if (completedCounters === counters.length) {

        }
      }
    };

    counter.innerText = '0';
    updateCount();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll('.numberdiv h1');
  const speed = 1000;
  let maxTarget = 0;
  let completedCounters = 0;

  // Find the maximum target value to determine when all counters should stop
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    if (target > maxTarget) {
      maxTarget = target;
    }
  });

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const increment = target / speed;

    const updateCount = () => {
      let count = +counter.innerText;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, speed / maxTarget);
      } else {
        counter.innerText = target;
        completedCounters++;

        // Check if all counters have completed
        if (completedCounters === counters.length) {
          // console.log("All counters have finished counting.");
          // Optionally, you can trigger additional actions here
        }
      }
    };

    counter.innerText = '0';
    updateCount();
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll('.numberdiv h1');
  const speed = 600;
  let maxTarget = 0;
  let completedCounters = 0;

  // Find the maximum target value to determine when all counters should stop
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target-01');
    if (target > maxTarget) {
      maxTarget = target;
    }
  });

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target-01');
    const increment = target / speed;

    const updateCount = () => {
      let count = +counter.innerText;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, speed / maxTarget);
      } else {
        counter.innerText = target;
        completedCounters++;

        // Check if all counters have completed
        if (completedCounters === counters.length) {
          // console.log("All counters have finished counting.");
          // Optionally, you can trigger additional actions here
        }
      }
    };

    counter.innerText = '0';
    updateCount();
  });
});
// ============pop-up-form=====================// 
function showPopup() {
  const popup = document.getElementById('popup1');
  popup.style.display = 'flex';
  popup.classList.add('show');
}

// Function to hide the popup
function closePopup() {
  const popup = document.getElementById('popup1'); // Ensure ID matches
  popup.classList.remove('show');
  setTimeout(() => {
    popup.style.display = 'none'; // Match animation duration
  }, 300);
}

// Show the popup initially after 1 second
setTimeout(showPopup, 1000);

document.addEventListener('DOMContentLoaded', function () {
  var sliderContainer = document.querySelector('.slider-container');
  var slides = sliderContainer.children;
  var slideCount = slides.length;
  var slideWidth = slides[0].offsetWidth;
  var slideDuration = 2000;
  var currentIndex = 0;
  var intervalId;
  var stopSlideId = 'stopSlide';
  function autoSlide() {
    intervalId = setInterval(function () {
      currentIndex = (currentIndex + 1) % slideCount;
      moveSlide(currentIndex);
      if (slides[currentIndex].id === stopSlideId) {
        clearInterval(intervalId);
        setTimeout(function () {
          currentIndex = 0;
          moveSlide(currentIndex);
          autoSlide();
        }, slideDuration);
      }
    }, slideDuration);
  }

  function moveSlide(index) {
    sliderContainer.style.transition = 'transform 0.3s ease-in-out';
    sliderContainer.style.transform = 'translateX(' + (-index * slideWidth) + 'px)';
  }

  autoSlide();
  sliderContainer.addEventListener('mouseenter', function () {
    clearInterval(intervalId);
  });

  sliderContainer.addEventListener('mouseleave', function () {
    if (slides[currentIndex].id !== stopSlideId) {
      autoSlide();
    }
  });
});
const form = document.getElementById('form-container');
const enrollBtn = document.querySelectorAll('.btn-div');
const closeButton = document.getElementById('close-button');
const anotherButton = document.getElementById('another-button');  // New line for the additional button

function toggleForm() {
  form.style.display = (form.style.display === 'none') ? 'block' : 'none';
}

enrollBtn.forEach(button => button.addEventListener('click', toggleForm)); // Changed from querySelectorAll to forEach for multiple elements
closeButton.addEventListener('click', toggleForm);
anotherButton.addEventListener('click', toggleForm);  // Add event listener for the new button

// =========================icon=======================
// JavaScript to control the zoom in and zoom out effect on click
const iconContainer = document.querySelector('.custom-icon-container');
const customIcon = document.querySelector('.custom-icon');

customIcon.addEventListener('click', function () {
  iconContainer.classList.toggle('zoom-in');
  iconContainer.classList.toggle('zoom-out');
});
// ========================seo==========

