let icon = $('#js_icon')
let topmenu = $('#js_topmenu')
let links = $('.menu_link')
let create_button = $('#js_create_button')
//console.log(links)

$(icon).on('click', function() {
    icon.toggleClass("ac");
    topmenu.toggleClass("hidden");
    icon.toggleClass("icon_fixed");
})

for (let i = 0; i< links.length; i++) {
    let link = links[i];
    $(link).mouseover(function() {
        $(link).css("color", "black");
    });
        $(link).mouseout(function() {
        $(link).css("color", "white");
    });
}

    $(create_button).mouseover(function() {
        $(create_button).css("color", "black");
        $(create_button).css("border", "solid 3px #fff");
    });

    $(create_button).mouseout(function() {
        $(create_button).css("color", "white");
        $(create_button).css("border", "solid 3px #000");
    });