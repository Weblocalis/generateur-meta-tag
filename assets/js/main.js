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

//Footer
async function loadFooter() {
    try {
        const response = await fetch('/partials/footer.html'); // Mettez à jour le chemin si nécessaire
        const footerContent = await response.text();
        document.getElementById('footer').innerHTML = footerContent;

        // Mettre à jour l'année actuelle
        const yearElement = document.getElementById('currentYear');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    } catch (error) {
        console.error('Erreur de chargement du footer:', error);
    }
}

// Charger le footer lorsque le document est prêt
document.addEventListener("DOMContentLoaded", loadFooter);
