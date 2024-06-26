function replace_submit() {
    // Ajoute un style CSS pour masquer les éléments avec la classe "hidden_with_js"
    document.head.innerHTML += '<style type="text/css">.hidden_with_js { display:none; }</style>';

    // Remplace le contenu de l'élément avec l'ID "change_submit" par le nouveau bouton et la zone de texte
    document.getElementById("change_submit").innerHTML = '<label for="balises_meta">Collez ce code dans la balise <code>&lt;head&gt;-&lt;/head&gt;</code> de votre page web :</label><br><textarea id="balises_meta" name="balises_meta" style="white-space: pre-wrap;" rows="12" cols="60" readonly></textarea><br><input type="button" id="launch" value="Générer les balises Meta" onclick="gene_balise(this.form)" /> <button type="button" onclick="copierTexte()">Copier</button>';
}




function gene_balise(form) {
    form.balises_meta.value = ""; // Réinitialiser le champ balises_meta

    // Vérifier si le champ title est renseigné
    if (form.title.value.trim() !== "") {
        form.balises_meta.value += '<title>' + form.title.value + '</title>\n';
    }

    // Vérifier si le champ content_type est renseigné
    if (form.content_type.value.trim() !== "") {
        form.balises_meta.value += '<meta charset="' + form.content_type.value + '">\n';
    }

    // Vérifier si le champ content_language est renseigné
    if (form.content_language.value.trim() !== "") {
        form.balises_meta.value += '<meta name="content-language" content="' + form.content_language.value + '">\n';
    }












    var tagViewport = document.getElementById("TagViewport");

    if (form.suggect_viewport.checked == true) {
        if (form.suggect_viewport.value.trim() !== "") {
            // Si l'option "suggect_viewport" est cochée, générer uniquement la balise meta pour viewport avec width=device-width, initial-scale=1.0
            form.balises_meta.value += '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n';
        }
    } else if (tagViewport) {
        var width = tagViewport.querySelector('[name="viewport_width"]').value.trim();
        var height = tagViewport.querySelector('[name="viewport_height"]').value.trim();
        var initialScale = tagViewport.querySelector('[name="viewport_initial_scale"]').value.trim();
        var minimumScale = tagViewport.querySelector('[name="viewport_minimum_scale"]').value.trim();
        var maximumScale = tagViewport.querySelector('[name="viewport_maximum_scale"]').value.trim();
        var userScalable = tagViewport.querySelector('[name="viewport_user_scalable"]').value.trim();
    
        // Vérifier si au moins un champ du viewport est renseigné
        if (width !== "" || height !== "" || initialScale !== "" || minimumScale !== "" || maximumScale !== "" || userScalable !== "") {
            var contentValue = "";
            if (width !== "") contentValue += "width=" + width + ", ";
            if (height !== "") contentValue += "height=" + height + ", ";
            if (initialScale !== "") contentValue += "initial-scale=" + initialScale + ", ";
            if (minimumScale !== "") contentValue += "minimum-scale=" + minimumScale + ", ";
            if (maximumScale !== "") contentValue += "maximum-scale=" + maximumScale + ", ";
            if (userScalable !== "") contentValue += "user-scalable=" + userScalable;
    
            // Génération de la balise meta viewport
            form.balises_meta.value += '<meta name="viewport" content="' + contentValue + '">\n';
        }
    }
    













    // Vérifier si le champ description est renseigné
    if (form.description.value.trim() !== "") {
        form.balises_meta.value += '<meta name="description" content="' + form.description.value + '">\n';
    }

    // Vérifier si le champ keywords est renseigné
    if (form.keywords.value.trim() !== "") {
        form.balises_meta.value += '<meta name="keywords" content="' + form.keywords.value + '">\n';
    }

    // Vérifier si le champ subject est renseigné
    if (form.subject.value.trim() !== "") {
        form.balises_meta.value += '<meta name="subject" content="' + form.subject.value + '">\n';
    }

    // Vérifier si le champ copyright est renseigné
    if (form.copyright.value.trim() !== "") {
        form.balises_meta.value += '<meta name="copyright" content="' + form.copyright.value + '">\n';
    }

    // Vérifier si le champ author est renseigné
    if (form.author.value.trim() !== "") {
        form.balises_meta.value += '<meta name="author" content="' + form.author.value + '">\n';
    }

    // Vérifier si le champ publisher est renseigné
    if (form.publisher.value.trim() !== "") {
        form.balises_meta.value += '<meta name="publisher" content="' + form.publisher.value + '">\n';
    }

    // Vérifier si le champ identifier_url est renseigné
    if (form.identifier_url.value.trim() !== "") {
        form.balises_meta.value += '<meta name="identifier-url" content="' + form.identifier_url.value + '">\n';
    }

    // Vérifier si le champ reply_to est renseigné
    if (form.reply_to.value.trim() !== "") {
        form.balises_meta.value += '<meta name="reply-to" content="' + form.reply_to.value + '">\n';
    }

    // Vérifier si le champ revisit_after est renseigné
    if (form.revisit_after.value.trim() !== "") {
        form.balises_meta.value += '<meta name="revisit-after" content="' + form.revisit_after.value + '">\n';
    }

    var selectedOptions = form.robots.selectedOptions;
    var robotsContent = '';
    
    // Vérifier si au moins une option autre que l'option vide est sélectionnée
    var isOptionSelected = Array.from(selectedOptions).some(option => option.value !== "");
    
    if (isOptionSelected) {
        for (var i = 0; i < selectedOptions.length; i++) {
            robotsContent += selectedOptions[i].value;
            if (i < selectedOptions.length - 1) {
                robotsContent += ', '; // Ajouter une virgule après chaque valeur, sauf la dernière
            }
        }
    
        form.balises_meta.value += '<meta name="robots" content="' + robotsContent + '">\n';
    }
    



    // Vérifier si le champ rating est renseigné
    if (form.rating.value.trim() !== "") {
        form.balises_meta.value += '<meta name="rating" content="' + form.rating.value + '">\n';
    }

    // Vérifier si le champ distribution est renseigné
    if (form.distribution.value.trim() !== "") {
        form.balises_meta.value += '<meta name="distribution" content="' + form.distribution.value + '">\n';
    }

    // Vérifier si le champ expires est renseigné
    if (form.expires.value.trim() !== "") {
        form.balises_meta.value += '<meta http-equiv="expires" content="' + form.expires.value + '">\n';
    }

    // Vérifier si le champ geography est renseigné
    if (form.geography.value.trim() !== "") {
        form.balises_meta.value += '<meta name="geography" content="' + form.geography.value + '">\n';
    }

    // Vérifier si le champ category est renseigné
    if (form.category.value.trim() !== "") {
        form.balises_meta.value += '<meta name="category" content="' + form.category.value + '">\n';
    }

    // Vérifier si la case à cocher dc_check est cochée et si le champ title est renseigné
    if (form.dc_check.checked == true) {
        if (form.title.value.trim() !== "") {
            form.balises_meta.value += '<meta name="dc.title" content="' + form.title.value + '">\n';
        }
        if (form.content_type.value.trim() !== "") {
            form.balises_meta.value += '<meta name="dc.content-type" content="' + form.content_type.value + '">\n';
        }
        if (form.content_language.value.trim() !== "") {
            form.balises_meta.value += '<meta name="dc.content-language" content="' + form.content_language.value + '">\n';
        }
        if (form.description.value.trim() !== "") {
            form.balises_meta.value += '<meta name="dc.description" content="' + form.description.value + '">\n';
        }
        if (form.keywords.value.trim() !== "") {
            form.balises_meta.value += '<meta name="dc.keywords" content="' + form.keywords.value + '">\n';
        }
        if (form.subject.value.trim() !== "") {
            form.balises_meta.value += '<meta name="dc.subject" content="' + form.subject.value + '">\n';
        }
        if (form.copyright.value.trim() !== "") {
            form.balises_meta.value += '<meta name="dc.copyright" content="' + form.copyright.value + '">\n';
        }
        if (form.author.value.trim() !== "") {
            form.balises_meta.value += '<meta name="dc.author" content="' + form.author.value + '">\n';
        }
        if (form.publisher.value.trim() !== "") {
            form.balises_meta.value += '<meta name="dc.publisher" content="' + form.publisher.value + '">\n';
        }
        if (form.identifier_url.value.trim() !== "") {
            form.balises_meta.value += '<meta name="dc.identifier-url" content="' + form.identifier_url.value + '">\n';
        }
        if (form.reply_to.value.trim() !== "") {
            form.balises_meta.value += '<meta name="dc.reply-to" content="' + form.reply_to.value + '">\n';
        }
    }

}
window.addEventListener('load', replace_submit);







// *************************************************************//
// Fonction pour mettre à jour le nombre de caractères restants //
// *************************************************************//
function updateCharsRemaining() {
    var input = document.getElementById("title"); // Récupérer l'élément input et l'élément pour afficher le nombre de caractères restants
    var remainingCharsElement = document.getElementById("remainingChars");
    var maxLength = 65; // Définir la longueur maximale autorisée
    var remaining = maxLength - input.value.length; // Calculer le nombre de caractères restants
    remainingCharsElement.textContent = "Caractères restants : " + remaining; // Mettre à jour le texte de l'élément affichant le nombre de caractères restants
}
// Ajouter un écouteur d'événements pour détecter les frappes de l'utilisateur
document.getElementById("title").addEventListener("input", updateCharsRemaining);
// Appeler la fonction une première fois pour initialiser l'affichage
updateCharsRemaining();


function updateCharsRemainingDescription() {
    var input = document.getElementById("description");
    var remainingCharsElement = document.getElementById("remainingCharsDescription");
    var maxLength = 120;
    var remaining = maxLength - input.value.length;
    remainingCharsElement.textContent = "Caractères restants : " + remaining;
}
document.getElementById("description").addEventListener("input", updateCharsRemainingDescription);
updateCharsRemainingDescription();

// ***********************************************************************//
// FIN de la Fonction pour mettre à jour le nombre de caractères restants //
// ***********************************************************************//

// *****************************************************************//
// Fonction pour Copier le texte sélectionné dans le presse-papiers //
// *****************************************************************//
function copierTexte() {
    var zoneTexte = document.getElementById("balises_meta");

    // Sélectionner le texte dans la zone de texte
    zoneTexte.select();

    try {
        // Copier le texte sélectionné dans le presse-papiers
        var copieReussie = document.execCommand('copy');
        var message = copieReussie ? 'Copié dans le presse-papiers' : 'La copie a échoué';
        console.log(message);
    } catch (err) {
        console.error('Erreur lors de la copie du texte : ', err);
    }
}



// restreindre les valeurs entrées entre 0 et 10.
// Récupérer les éléments d'entrée
const inputs = document.querySelectorAll('.flex-item input[type="number"]');

// Ajouter un écouteur d'événement à chaque élément d'entrée
inputs.forEach(input => {
    input.addEventListener("input", function() {
        let value = parseFloat(this.value);
        if (isNaN(value) || value < 0) {
            this.value = 0;
        } else if (value > 10) {
            this.value = 10;
        }
    });
});
