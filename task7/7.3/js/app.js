var titleText = 'Привет, мой друг! Добро пожаловать на сайт группы отелей Selly Hotels!';

var promoTitle = document.getElementById('promoTitle'); // получаем заголовок страницы
promoTitle.innerText = titleText;                       // заменяем текст в заголовке

var button = document.getElementById('showAllFeedbacks');
button.addEventListener('click', showAllFeedbacks);

function showAllFeedbacks() {
    var allfeedbacks = document.getElementById('hiddenFeedbacks');
    allfeedbacks.classList.remove('hidden');
    allfeedbacks.classList.add('loaded');
    button.classList.add('hidden');
}