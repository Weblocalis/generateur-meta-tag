$(document).ready(function () {
    var $navPanel = $('#navPanel'); // Sélectionne le panneau mobile
    var $navToggle = $('.navPanelToggle'); // Sélectionne le bouton pour ouvrir le panneau

    // Ouvrir le panneau mobile au clic sur le bouton
    $navToggle.on('click', function (e) {
        e.preventDefault();
        $navPanel.attr('aria-hidden', 'false').fadeIn(300); // Afficher le panneau avec une animation
    });

    // Fermer le panneau mobile au clic sur "Fermer"
    $navPanel.find('.close').on('click', function (e) {
        e.preventDefault();
        $navPanel.attr('aria-hidden', 'true').fadeOut(300); // Masquer le panneau avec une animation
    });
});

// Affichage dynamique de l'année
document.getElementById("currentYear").textContent = new Date().getFullYear();
