// Lorsque le DOM est prêt, exécute la fonction principale
$(function () {
    // Déclare les variables pour l'objet fenêtre, le corps du document et la navigation
    var $window = $(window), // Sélectionne l'élément fenêtre
        $body = $('body'), // Sélectionne le corps du document
        $nav = $('#nav'), // Sélectionne l'élément de navigation par son ID
        // Crée un panneau de navigation contenant le contenu de $nav et un bouton de fermeture
        $navPanel = $('<div id="navPanel">').append($nav.html()).append('<a href="#navPanel" class="close"></a>');

    // Ajoute la classe 'is-loading' au corps pour indiquer que la page est en chargement
    $body.addClass('is-loading');

    // Écoute l'événement de chargement de la fenêtre
    $window.on('load', function () {
        // Attendre 100 millisecondes avant de retirer la classe 'is-loading'
        window.setTimeout(function () {
            $body.removeClass('is-loading');
        }, 100);
    });

    // Ajuste le comportement du panneau de navigation en fonction de la taille de l'écran
    skel.on('+medium -medium', function () {
        // Priorise les éléments avec la classe 'important(medium)' selon si le point de rupture 'medium' est actif
        $.prioritize(
            '.important\\28 medium\\29',
            skel.breakpoint('medium').active
        );
    });

    // Ajoute le panneau de navigation au corps et configure ses paramètres
    $navPanel.appendTo($body).panel({
        delay: 500, // Délai avant l'animation du panneau
        hideOnClick: true, // Masque le panneau lors d'un clic
        hideOnSwipe: true, // Masque le panneau lors d'un balayage
        resetScroll: true, // Réinitialise le défilement lors de l'ouverture
        resetForms: true, // Réinitialise les formulaires lors de l'ouverture
        side: 'left' // Positionne le panneau sur le côté gauche
    });

    // Si le système d'exploitation est Windows Phone et que la version est inférieure à 10
    if (skel.vars.os === 'wp' && skel.vars.osVersion < 10) {
        // Désactive les transitions CSS pour le panneau de navigation
        $navPanel.css('transition', 'none');
    }
});

// FOOTER
// Obtient l'année actuelle à partir de la date système
const currentYear = new Date().getFullYear(); 

// Met à jour le contenu texte de l'élément 'currentYear' pour afficher l'année actuelle
document.getElementById('currentYear').textContent = currentYear; 
