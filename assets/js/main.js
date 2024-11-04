$(document).ready(function () {
    var $navPanel = $('#navPanel'); // Sélection du panneau mobile
    var $navToggle = $('.navPanelToggle'); // Sélection du bouton pour ouvrir le panneau

    // Ouvrir/fermer le panneau mobile au clic sur le bouton
    $navToggle.on('click', function (e) {
        e.preventDefault();
        
        // Utilisation de data pour suivre l'état au lieu d'attr
        var isHidden = $navPanel.data('is-hidden') === true;

        // Mettre à jour l'attribut aria-hidden et le data
        $navPanel.attr('aria-hidden', !isHidden);
        $navPanel.data('is-hidden', !isHidden);

        // Afficher ou masquer le panneau avec animation
        if (isHidden) {
            $navPanel.stop(true, true).css({
                'visibility': 'visible',
                'opacity': '1'
            });
        } else {
            $navPanel.stop(true, true).css({
                'visibility': 'hidden',
                'opacity': '0'
            });
        }
    });

    // Fermer le panneau mobile au clic sur "Fermer"
    $navPanel.find('.close').on('click', function (e) {
        e.preventDefault();
        $navPanel.attr('aria-hidden', 'true');
        $navPanel.data('is-hidden', true);
        $navPanel.stop(true, true).css({
            'visibility': 'hidden',
            'opacity': '0'
        });
    });

    // Initialisation de Skel.js pour le menu
    skel.init({
        reset: 'full',
        breakpoints: {
            // Définir un point d'arrêt pour le menu mobile
            wide: ['1200px', '1680px'],
            normal: ['960px', '1200px'],
            narrow: ['740px', '960px'],
            mobile: ['480px', '740px'],
            // Si vous avez besoin d'une configuration plus personnalisée
            // ajouter ici d'autres breakpoints
        }
    });
});
