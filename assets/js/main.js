$(document).ready(function () {
    var $navPanel = $('#navPanel'); // Panneau mobile
    var $navToggle = $('.navPanelToggle'); // Bouton pour ouvrir/fermer

    // Ouvrir/Fermer le panneau mobile
    $navToggle.on('click', function (e) {
        e.preventDefault();

        // Inversion de l'état de aria-hidden
        var isHidden = $navPanel.attr('aria-hidden') === 'true';
        $navPanel.attr('aria-hidden', !isHidden);

        // Animation d'ouverture/fermeture
        if (isHidden) {
            $navPanel.css({
                'visibility': 'visible',
                'opacity': '1',
                'transition': 'opacity 0.3s ease'
            });
        } else {
            $navPanel.css({
                'opacity': '0',
                'transition': 'opacity 0.3s ease'
            });

            // Retarder la visibilité jusqu'à la fin de l'animation
            setTimeout(function () {
                $navPanel.css('visibility', 'hidden');
            }, 300);
        }
    });

    // Fermer le panneau mobile au clic sur le bouton "Fermer"
    $navPanel.find('.close').on('click', function (e) {
        e.preventDefault();
        $navPanel.attr('aria-hidden', 'true').css({
            'opacity': '0',
            'transition': 'opacity 0.3s ease'
        });

        // Délai pour rendre invisible après la fin de l'animation
        setTimeout(function () {
            $navPanel.css('visibility', 'hidden');
        }, 300);
    });

    // Initialisation de Skel.js pour le menu
    skel.init({
        reset: 'full',
        breakpoints: {
            wide: ['1200px', '1680px'],
            normal: ['960px', '1200px'],
            narrow: ['740px', '960px'],
            mobile: ['480px', '740px']
        }
    });
});



$(document).ready(function () {
    $('.faq-question').on('click', function () {
        // Cache ou montre la réponse
        $(this).next('.faq-answer').slideToggle();
        
        // Change le style de la question pour indiquer qu'elle est ouverte ou fermée
        $(this).toggleClass('active');
    });
});
