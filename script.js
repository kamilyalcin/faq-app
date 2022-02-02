
const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
    question.addEventListener('click', function () {
        question.lastElementChild.classList.toggle('hidden');
        let btn = question.getElementsByTagName('button')[0];
        btn.classList.toggle('rotate');
    })
});