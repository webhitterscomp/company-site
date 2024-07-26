
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
 
document.addEventListener('DOMContentLoaded', function () {
  var sliderContainer = document.querySelector('.slider-container');
  var slides = sliderContainer.children;
  var slideCount = slides.length;
  var slideWidth = slides[0].offsetWidth;
  var slideDuration = 3000;
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
const enrollBtn = document.querySelector('.btn-div');
const closeButton = document.getElementById('close-button');

function toggleForm() {
  form.style.display = (form.style.display === 'none') ? 'block' : 'none';
}

enrollBtn.addEventListener('click', toggleForm);
closeButton.addEventListener('click', toggleForm);


// =========================icon=======================
// JavaScript to control the zoom in and zoom out effect on click
const iconContainer = document.querySelector('.custom-icon-container');
const customIcon = document.querySelector('.custom-icon');

customIcon.addEventListener('click', function() {
    iconContainer.classList.toggle('zoom-in');
    iconContainer.classList.toggle('zoom-out');
});
