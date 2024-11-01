$(document).ready(function () {
    var $navPanel = $('#navPanel'); // Sélectionne le panneau de navigation mobile
    var $navToggle = $('.navPanelToggle'); // Sélectionne le bouton pour ouvrir le panneau

    // Ouvre le panneau de navigation mobile
    $navToggle.on('click', function (e) {
        e.preventDefault(); // Empêche le comportement par défaut du lien
        $navPanel.fadeIn(300); // Affiche le panneau avec une animation
    });

    // Ferme le panneau de navigation mobile lorsque le bouton de fermeture est cliqué
    $navPanel.find('.close').on('click', function (e) {
        e.preventDefault(); // Empêche le comportement par défaut du lien
        $navPanel.fadeOut(300); // Cache le panneau avec une animation
    });
});
