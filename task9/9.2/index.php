<?php
    require_once('php/feedback.php');
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Selly - Отель в горах</title>
    <link href="http://localhost/sellyhotel/css/style.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400" rel="stylesheet">
</head>

<body>
    <div class="top_menu_wrapper">
        <div class="mobile_menu_background">
            <div class="mobile_menu_wrapper" id="menuButton">
                <span class="mobile_menu_icon"></span>
                <span class="mobile_menu_text">Меню</span>
            </div>
        </div>
        <div class="menu_container" id="menuContainer">
            <ul class="menu">
                <li class="menu_item">
                    <a href="#about" class="js_smooth_scroll menu_link" id="aboutLink">Об отеле</a>
                </li>
                <li class="menu_item">
                    <a href="#app" class="js_smooth_scroll menu_link" id="appLink">Приложение</a>
                </li>
                <li class="menu_item">
                    <a href="#feedback" class="js_smooth_scroll menu_link" id="feedbackLink">Отзывы</a>
                </li>
                <li class="menu_item">
                    <a href="#subscribe" class="js_smooth_scroll menu_link" id="subscribeLink">Подписка</a>
                </li>
            </ul>
        </div>
    </div>

    <div class="promo_wrapper" id="promoWrapper">
        <div class="promo_container">
            <img src="images/selly.png" alt="Selly logo" class="promo_logo">
            <h1 class="promo_title" id="promoTitle">
                К услугам гостей Отеля зона СПА и банкетный зал по системе «Все включено».
            </h1>
            <p class="promo_subtitle">
                Наш отель развеет привычное понимание о стандартных гостиницах, как местах для временного проживания, и позволит каждому посетителю почувствовать располагающую, домашнюю атмосферу тепла и уюта.
            </p>

            <button class="success_button" id="findNumberButton">Найти номер</button>
            <button class="additional_button" id="watchVideoButton">Смотреть видео</button>
        </div>
    </div>

    <div class="content_wrapper" id="about">
        <div class="description">
            <h2 class="article_title">Роскошный дизайн</h2>
            <p class="article_text">
                Неповторимые дизайнерские задумки в интерьере отеля, которые вы можете посмотреть на официальном сайте, помогли удачно сочетать классику, уникальную ковку ручной работы и лепку.
            </p>

            <p class="article_text">
                Комфортные диваны из натуральной кожи, а также стильные полы из мрамора лишь подчеркивают всю изысканность Гранд Отель Аристократ. Еще богаче здание смотрится поздним вечером, когда подсветка гостиницы так и манит, будто призывая вас заглянуть в свое изысканное убранство. К вашим услугам:
            </p>

            <ul class="article_menu">
                <li class="article_menu_item">роскошная зона СПА</li>
                <li class="article_menu_item">банкетный зал</li>
                <li class="article_menu_item">конференц зал</li>
                <li class="article_menu_item">дневное посещение</li>
                <li class="article_menu_item">проживание по системе “Все включено”</li>
            </ul>

            <p class="article_text">
                Удачное расположение перенесет вас в атмосферу лесного массива. Вы сможете наслаждаться прекрасными птичьими трелями, а не слушать звуки машин. Такая обстановка, как нельзя лучше, будут дополнять спокойствие и размеренность этого прекрасного местечка. Забронировать номер в нашей гостинице можно прямо на официальном сайте.
            </p>
        </div>
    </div>

    <div class="content_wrapper feature_wrapper" id="app">
        <div class="feature_description">
            <div class="feature_title_wrapper">
                <h3 class="feature_title">Удобное приложение</h3>
                <div class="feature_title_icons">
                    <img src="images/apple-icon.png" alt="Icon" class="feature_icon">
                    <img src="images/android-icon.png" alt="Icon" class="feature_icon">
                </div>
            </div>
            <p class="feature_subtitle">
                В нашем приложении вы найдете фото отеля, отзывы постояльцев и узнаете о последних акциях.
            </p>
        </div>
        <div class="feature_image_wrapper">
            <img src="images/phone-app.png" alt="App">
        </div>
        <div class="clear"></div>
    </div>

    <div class="content_wrapper feedback_wrapper" id="feedback">
        <h3 class="feedback_title">Отзывы наших клиентов</h3>
        <div class="feedbacks">
            <?php foreach ($testimonials as  $testimonial): ?>
            <div class="feedback_container">
                <img class="feedback_photo" alt=<?= $testimonial['name'] ?> src=<?= $testimonial['imageUrl'] ?> >
                <h4 class="person_name"><?= $testimonial['name'] ?></h4>
                <p class="feedback_text">
                    <?= $testimonial['text'] ?>
                </p>
            </div>
            <?php endforeach; ?>
        </div>
     <div class="clear"></div>
        
    </div>

    <div class="separation_wrapper" id="subscribe">
        <div class="content_wrapper form_wrapper">

            <?php if (isset($_GET['email'])): ?>
            <h2 class="promo_title">
                Спасибо за подписку!
            </h2>
            <p class="promo_subtitle">
                Теперь на почту <?= $_GET['email'] ?> мы будем присылать актуальную информацию о наших акциях и специальных предложениях. Будем на связи!
            </p>
            <?php else: ?>
            <h2 class="promo_title">
                Подпишитесь и получайте новости первым
            </h2>
            <p class="promo_subtitle">
                В рассылке мы сообщаем о наших акциях и специальных предложениях. Вы можете получать эту информацию из первых рук.
            </p>
            <form action="/sellyhotel" method="get" class="order_form">
                <input id="emailField" type="text" name="email" placeholder="Введите email" class="form_input_field">
                <button class="success_button form_success_button" id="js_form_success_button">Подписаться</button>
            </form>
            <?php endif; ?>
        </div>

    </div>

    <div class="bottom_menu menu_wrapper">
        <div class="menu_container">
            <ul class="menu">
                <li class="menu_item">
                    <a href="#about" class="menu_link" id="aboutFooterLink">Об отеле</a>
                </li>
                <li class="menu_item">
                    <a href="#app" class="menu_link" id="appFooterLink">Приложение</a>
                </li>
                <li class="menu_item">
                    <a href="#feedback" class="menu_link" id="feedbackFooterLink">Отзывы</a>
                </li>
                <li class="menu_item">
                    <a href="#subscribe" class="menu_link" id="subscribeFooterLink">Подписка</a>
                </li>
            </ul>
        </div>
    </div>

    <div class="scroll_up_arrow" id="scrollUpArrow"></div>

    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/jquery.scrollTo.min.js"></script>
    <script src="js/app.js"></script>
</body>

</html>