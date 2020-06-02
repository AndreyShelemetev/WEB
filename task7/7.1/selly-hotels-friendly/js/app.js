var name = prompt('Как к вам обращаться?');
var titleText = 'Привет, '+ name + '! Добро пожаловать на сайт группы отелей Selly Hotels!';

var promoTitle = document.getElementById('promoTitle'); // получаем заголовок страницы
promoTitle.innerText = titleText;                       // заменяем текст в заголовке