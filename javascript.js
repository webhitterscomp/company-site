$(".hover").mouseleave(
    function () {
        $(this).removeClass("hover");
    }
);
function toggleMenu() {
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}





const que1 = document.getElementById('question-p1')
const ans1 = document.getElementById('ans-p1')

que1.addEventListener('click', function () {
    console.log('hy')

    if (ans1.style.display === 'block') {
        ans1.style.display = 'none';
    } else {
        ans1.style.display = 'block';
    }

})
const que2 = document.getElementById('question-p2')
const ans2 = document.getElementById('ans-p2')

que2.addEventListener('click', function () {
    console.log('hy')

    if (ans2.style.display === 'block') {
        ans2.style.display = 'none';
    } else {
        ans2.style.display = 'block';
    }

})
const que3 = document.getElementById('question-p3')
const ans3 = document.getElementById('ans-p3')

que3.addEventListener('click', function () {
    console.log('hy')

    if (ans3.style.display === 'block') {
        ans3.style.display = 'none';
    } else {
        ans3.style.display = 'block';
    }

})
const qus4 = document.getElementById('question-p4')
const ans4 = document.getElementById('ans-p4')

qus4.addEventListener('click', function () {
    console.log('hy')

    if (ans4.style.display === 'block') {
        ans4.style.display = 'none';
    } else {
        ans4.style.display = 'block';
    }

})
const que5 = document.getElementById('question-p5')
const ans5 = document.getElementById('ans-p5')

que5.addEventListener('click', function () {
    console.log('hy')

    if (ans5.style.display === 'block') {
        ans5.style.display = 'none';
    } else {
        ans5.style.display = 'block';
    }

})