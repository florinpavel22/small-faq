let questionTitles = document.querySelectorAll('.question-title');

questionTitles.forEach(questionTitle => {
    questionTitle.addEventListener('click', () => {
        if(questionTitle.parentElement.className.includes('open')) {
            removeActive();
        } else {
            removeActive();
            questionTitle.parentElement.classList.add('open');
        }
    });
});

const removeActive = () => {
    questionTitles.forEach(questionTitle => {
        questionTitle.parentElement.classList.remove('open');
    });
}