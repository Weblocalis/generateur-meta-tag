$(document).ready(function () {
    var $navPanel = $('#navPanel'); // Sélection du panneau mobile
    var $navToggle = $('.navPanelToggle'); // Sélection du bouton pour ouvrir le panneau

    // Ouvrir/fermer le panneau mobile au clic sur le bouton
    $navToggle.on('click', function (e) {
        e.preventDefault();
        var isHidden = $navPanel.attr('aria-hidden') === 'true';

        // Mettre à jour l'attribut aria-hidden
        $navPanel.attr('aria-hidden', !isHidden);

        // Afficher ou masquer le panneau avec animation
        if (isHidden) {
            $navPanel.css({
                'visibility': 'visible',
                'opacity': '1'
            });
        } else {
            $navPanel.css({
                'visibility': 'hidden',
                'opacity': '0'
            });
        }
    });

    // Fermer le panneau mobile au clic sur "Fermer"
    $navPanel.find('.close').on('click', function (e) {
        e.preventDefault();
        $navPanel.attr('aria-hidden', 'true');
        $navPanel.css({
            'visibility': 'hidden',
            'opacity': '0'
        });
    });
});



// Affichage dynamique de l'année
document.getElementById("currentYear").textContent = new Date().getFullYear();
