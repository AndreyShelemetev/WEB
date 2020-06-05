
$(window).on('load', function(){
    initMobileMenu();
    initScrollUpButton();
});

$(window).on('scroll', function() {
    toggleScrollUpButton();
});

function toggleScrollUpButton() {
    var TOP_OFFSET = 0;
    if ($('html').scrollTop() > $(window).height() - TOP_OFFSET) {
        $('#scrollUpArrow').addClass('visible');
    }
    else {
        $('#scrollUpArrow').removeClass('visible');
    }
}

function initMobileMenu() {
    $('#menuButton').on('click', function() {
        $('#menuButton').toggleClass('active');
        $('#menuContainer').toggleClass('active');
    });
}

function initScrollUpButton() {
    $('#scrollUpArrow').click(function() {
        var topOffset = 0;
        $('html').animate({
            scrollTop: topOffset
        }, 1000);
    });
}

function ClickButton() {
    $('#js_form_success_button').on('click', function() {
        console.log('111');
    });
}

/* Универсальное решение для плавной прокрутки */
$('.js_smooth_scroll').each(function() {
    var target = $(this).attr('href');
    $(this).click(function() {
        event.preventDefault();
        $(window).scrollTo(target, 5000);
    });
});

