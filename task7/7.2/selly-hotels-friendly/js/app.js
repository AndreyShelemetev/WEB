var name = prompt('Как к вам обращаться?');
var titleText = 'Привет, ' + name + '! Добро пожаловать на сайт группы отелей Selly Hotels!';

var promoTitle = document.getElementById('promoTitle'); // получаем заголовок страницы
promoTitle.innerText = titleText; // заменяем текст в заголовке

var age = prompt('Укажите ваш возраст');
if (age < 16) {
    var promoWrapper = document.getElementById('promoWrapper');
    promoWrapper.classList.add('aquapark');
} else if (age >= 16 && age <= 35) {
    var promoWrapper = document.getElementById('promoWrapper');
    promoWrapper.classList.add('club');
}
