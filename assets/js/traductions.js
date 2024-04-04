// Fonction pour charger les traductions en fonction de la langue sélectionnée
function loadTranslations(language) {
    // Charger le fichier JSON de traductions correspondant à la langue
    fetch(`lang/${language}.json`)
        .then(response => response.json())
        .then(data => {
            // Utiliser les traductions chargées pour mettre à jour le contenu de la page
            document.querySelector('label[for="title"]').innerHTML = data.form.title_label;
            document.querySelector('label[for="description"]').innerHTML = data.form.description_label;
            document.querySelector('label[for="email"]').innerHTML = data.form.email_label;
            document.querySelector('label[for="phone"]').innerHTML = data.form.phone_label;
            document.getElementById('submit_button').value = data.form.submit_button;
        })
        .catch(error => console.error('Error loading translations:', error));
}

// Fonction pour détecter la langue préférée de l'utilisateur à partir de son navigateur
function detectLanguage() {
    // Récupérer la langue préférée à partir des paramètres du navigateur
    const userLanguage = navigator.language || navigator.userLanguage;
    // Extraire la partie de la langue principale (par exemple, "en" de "en-US")
    return userLanguage.split('-')[0];
}

// Charger les traductions pour la langue détectée
const lang = detectLanguage();
loadTranslations(lang);
