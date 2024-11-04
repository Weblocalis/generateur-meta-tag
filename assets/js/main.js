$(document).ready(function () {
    var $navPanel = $('#navPanel'); // Sélection du panneau mobile
    var $navToggle = $('.navPanelToggle'); // Sélection du bouton pour ouvrir le panneau

    // Ouvrir/fermer le panneau mobile au clic sur le bouton
    $navToggle.on('click', function (e) {
        e.preventDefault();
        if ($navPanel.attr('aria-hidden') === 'true') {
            $navPanel.attr('aria-hidden', 'false'); // Rendre le panneau visible
        } else {
            $navPanel.attr('aria-hidden', 'true'); // Masquer le panneau
        }
    });

    // Fermer le panneau mobile au clic sur "Fermer"
    $navPanel.find('.close').on('click', function (e) {
        e.preventDefault();
        $navPanel.attr('aria-hidden', 'true');
    });
});


// Affichage dynamique de l'année
document.getElementById("currentYear").textContent = new Date().getFullYear();
