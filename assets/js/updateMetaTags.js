// Fonction pour mettre à jour toutes les balises meta dans head
function updateMetaTags() {
    var pageTitle = document.title; // Obtenir le titre de la page actuelle
    var pageUrl = window.location.href; // Obtenir l'URL de la page actuelle
    var metaDescriptionTag = document.querySelector('meta[name="description"]');

    // Modifier l'URL canonique
    var canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
        canonicalTag.setAttribute("href", pageUrl);
    }

    // Modifier les balises Open Graph
    var ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) {
        ogTitleTag.setAttribute("content", pageTitle);
    }

    var ogDescriptionTag = document.querySelector('meta[property="og:description"]');
    if (ogDescriptionTag) {
        ogDescriptionTag.setAttribute("content", metaDescriptionTag ? (metaDescriptionTag.getAttribute("content") || "") : "");
    }

    var ogUrlTag = document.querySelector('meta[property="og:url"]');
    if (ogUrlTag) {
        ogUrlTag.setAttribute("content", pageUrl);
    }

    var ogImageTag = document.querySelector('meta[property="og:image"]');
    if (ogImageTag) {
        ogImageTag.setAttribute("content", "../generateur-meta-tagimageOrg.jpg");
    }

    // Modifier les balises Twitter Card
    var twitterTitleTag = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitleTag) {
        twitterTitleTag.setAttribute("content", pageTitle);
    }

    var twitterDescriptionTag = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescriptionTag) {
        twitterDescriptionTag.setAttribute("content", metaDescriptionTag ? (metaDescriptionTag.getAttribute("content") || "") : "");
    }

    var twitterImageTag = document.querySelector('meta[name="twitter:image"]');
    if (twitterImageTag) {
        twitterImageTag.setAttribute("content", "../generateur-meta-tagimageOrg.jpg");
    }
}

// Appeler la fonction au chargement de la page
updateMetaTags();
