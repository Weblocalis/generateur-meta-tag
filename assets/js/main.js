$(function () {
    var $window = $(window),
        $body = $('body'),
        $nav = $('#nav'),
        $navPanel = $('<div id="navPanel">').append($nav.html()).append('<a href="#navPanel" class="close"></a>');

    $body.addClass('is-loading');

    $window.on('load', function () {
        window.setTimeout(function () {
            $body.removeClass('is-loading');
        }, 100);
    });

    skel.on('+medium -medium', function () {
        $.prioritize(
            '.important\\28 medium\\29',
            skel.breakpoint('medium').active
        );
    });

    $navPanel.appendTo($body).panel({
        delay: 500,
        hideOnClick: true,
        hideOnSwipe: true,
        resetScroll: true,
        resetForms: true,
        side: 'left'
    });

    if (skel.vars.os === 'wp' && skel.vars.osVersion < 10) {
        $navPanel.css('transition', 'none');
    }
});