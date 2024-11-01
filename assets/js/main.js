$(document).ready(function () {
    var $navPanel = $('#navPanel'); // Sélectionne le panneau mobile
    var $navToggle = $('.navPanelToggle'); // Sélectionne le bouton pour ouvrir le panneau

    // Ouvrir le panneau mobile au clic sur le bouton
    $navToggle.on('click', function (e) {
        e.preventDefault();
        $navPanel.fadeIn(300); // Afficher le panneau avec une animation
    });

    // Fermer le panneau mobile au clic sur "Fermer"
    $navPanel.find('.close').on('click', function (e) {
        e.preventDefault();
        $navPanel.fadeOut(300); // Masquer le panneau avec une animation
    });
});


// Supprimer le fragment d'URL si présent
if (window.location.hash) {
    window.history.replaceState({}, document.title, window.location.pathname + window.location.search);
}
