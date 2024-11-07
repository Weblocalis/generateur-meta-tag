// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// nice select
$(document).ready(function () {
    $('select').niceSelect();
});




document.addEventListener('DOMContentLoaded', function() {
    // Charger le fichier JSON contenant les villes
    fetch('https://weblocalis.github.io/boostifyseo-directory/data/villes.json')
        .then(response => {
            console.log("Statut de la réponse:", response.status);  // Journalisation de statut
            if (!response.ok) {
                throw new Error('Erreur de chargement du fichier JSON');
            }
            return response.json();
        })
        .then(data => {
            console.log("Données JSON chargées:", data);  // Affichage des données
            const selectElement = document.getElementById('inputDoctorName');
            
            if (!selectElement) {
                console.error("L'élément select avec l'ID 'inputDoctorName' est introuvable.");
                return;
            }

            const allLocationsOption = document.createElement('option');
            allLocationsOption.value = '';
            allLocationsOption.textContent = 'Toutes les localisations';
            selectElement.appendChild(allLocationsOption);

            if (Array.isArray(data.cities)) {
                data.cities.forEach(city => {
                    const option = document.createElement('option');
                    option.value = city.id;
                    option.textContent = city.name;
                    selectElement.appendChild(option);
                });
            } else {
                console.error('Le fichier JSON ne contient pas de tableau "cities".');
            }
        })
        .catch(error => {
            console.error('Erreur lors du chargement des données JSON:', error);
        });
});