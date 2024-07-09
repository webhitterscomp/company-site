
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
  const slides = document.querySelector('.slides');
  const slide = document.querySelectorAll('.slide');

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

  setInterval(nextSlide, 2000); // Change slide every 3 seconds
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




