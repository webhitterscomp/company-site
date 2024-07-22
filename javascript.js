
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

document.addEventListener('DOMContentLoaded', function () {

  var sliderContainer = document.querySelector('.slider-container');
  var slides = sliderContainer.children;
  var slideCount = slides.length;
  var slideWidth = slides[0].offsetWidth;
  var slideDuration = 3000;
  var currentIndex = 0;
  var intervalId;

  function autoSlide() {
    intervalId = setInterval(function () {
      currentIndex = (currentIndex + 1) % slideCount;
      sliderContainer.style.transition = 'transform 1s ease-in-out';
      sliderContainer.style.transform = 'translateX(' + (-currentIndex * slideWidth) + 'px)';
    }, slideDuration);
  }
  autoSlide();
  sliderContainer.addEventListener('mouseenter', function () {
    clearInterval(intervalId);
  });
  sliderContainer.addEventListener('mouseleave', function () {
    autoSlide();
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

document.addEventListener('DOMContentLoaded', function() {
  var customIconContainer = document.querySelector('.custom-icon-container');

  function showCustomIcon() {
    customIconContainer.style.right = '0';
    customIconContainer.style.opacity = '1';

    // Auto-hide after 5 seconds
    setTimeout(function() {
      hideCustomIcon();
    }, 5000); // 5000 milliseconds = 5 seconds
  }

  function hideCustomIcon() {
    customIconContainer.style.right = '-100px'; // Assuming hiding off screen to the right
    customIconContainer.style.opacity = '0';
  }

  var didScroll = false;
  window.onscroll = function() {
    didScroll = true;
  };

  setInterval(function() {
    if (didScroll) {
      didScroll = false;
      showCustomIcon();
    }
  }, 250);
});

