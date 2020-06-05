console.log('aaaa');
$(window).on('load', function () {
    initMobileMenu();
    initPopup();
    initScrollUpButton();
    initFormHandler();
    initMenuSmoothScroll();
});

$(window).on('scroll', function () {
    toggleScrollUpButton();
});

function toggleScrollUpButton() {
    var TOP_OFFSET = 0;
    if ($('html').scrollTop() > $(window).height() - TOP_OFFSET) {
        $('#scrollUpArrow').addClass('visible');
    } else {
        $('#scrollUpArrow').removeClass('visible');
    }
}

function initMobileMenu() {
    $('#menuButton').on('click', function () {
        $('#menuButton').toggleClass('active');
        $('#menuContainer').toggleClass('active');
    });
}

function initPopup() {
    $('#subscribePopupButton').click(function () {
        $('#overlay').addClass('visible');
        $('#popupWindow').addClass('visible');
    });

    $('#closeButton').click(function () {
        $('#overlay').removeClass('visible');
        $('#popupWindow').removeClass('visible');
    });

    $('#popupWindow').click(function (event) {
        if (event.target.id == 'popupWindow') {
            $('#overlay').removeClass('visible');
            $('#popupWindow').removeClass('visible');
        }
    });
}

function initScrollUpButton() {
    $('#scrollUpArrow').click(function () {
        var topOffset = $('#about').offset().top;
        $('html').animate({
            scrollTop: topOffset
        }, 1000);
    });
}

/* Универсальное решение для плавной прокрутки */
function initMenuSmoothScroll() {
    $('.js_smooth_scroll').each(function () {
        var target = $(this).attr('href');
        $(this).click(function () {
            event.preventDefault();
            $(window).scrollTo(target, 500);
        });
    });
}

function initFormHandler() {
    $('#emailField').focus(function () {
        $('#emailField').removeClass('error');
        $('#errorMessage').addClass('hidden');
    });

    $('#subscribeForm').submit(function (event) {
        event.preventDefault();
        var emailFieldValue = $('#emailField').val();
        if (emailFieldValue === '') {
            $('#emailField').addClass('error');
            $('#errorMessage').removeClass('hidden');
        } else {
            $.ajax({
                    method: 'POST',
                    url: '/php/handler.php',
                    data: {
                        email: emailFieldValue,
                    },
                })
                .done(function (response) {
                    //console.log('Response from server: ' + response);
                     if (response === '1') {
                         $('#popupText').addClass('hidden');
                         $('#popupSuccess').removeClass('hidden');
                     } else {
                         $('#emailField').addClass('error');
                         $('#popupText').addClass('hidden');
                         $('#popupError').removeClass('hidden');
                     }

                })

        }
    });
}
