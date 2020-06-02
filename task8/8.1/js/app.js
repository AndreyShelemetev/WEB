$(window).on('load', function(){
    initMobileMenu();
});

$(window).on('scroll', function() {
    toggleScrollUpButton();
});

function toggleScrollUpButton() {
    var TOP_OFFSET = 400;
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

$('#scrollUpArrow').on('click', function() {
  $("body,html").animate({
    scrollTop:0
    }, 800);
});

$('#subscribePopupButton').on('click', function() {
  $('#popupWindow').addClass('visible');
  $('#overlay').addClass('visible');
});

$('#closeButton').on('click', function() {
  $('#popupWindow').removeClass('visible');
  $('#overlay').removeClass('visible');
});

$('#popupWindow').on('click', function() {
  $('#popupWindow').removeClass('visible');
  $('#overlay').removeClass('visible');
});
