document.addEventListener('DOMContentLoaded', function() {
    fetch('https://weblocalis.github.io/boostifyseo-directory/data/villes.json')
        .then(response => {
            console.log("Statut de la réponse:", response.status);
            if (!response.ok) {
                throw new Error('Erreur de chargement du fichier JSON');
            }
            return response.json();
        })
        .then(data => {
            console.log("Données JSON chargées:", data);
            const selectElement = document.getElementById('inputDoctorName');

            if (!selectElement) {
                console.error("L'élément select avec l'ID 'inputDoctorName' est introuvable.");
                return;
            }

            selectElement.style.display = 'block'; // Forcer l'affichage du <select> au cas où il serait masqué.

            const allLocationsOption = document.createElement('option');
            allLocationsOption.value = '';
            allLocationsOption.textContent = 'Toutes les localisations';
            selectElement.appendChild(allLocationsOption);

            if (Array.isArray(data.cities)) {
                const uniqueCities = new Map();
                data.cities.forEach(city => {
                    if (!uniqueCities.has(city.id)) {
                        uniqueCities.set(city.id, city.name);

                        const option = document.createElement('option');
                        option.value = city.id;
                        option.textContent = city.name;
                        selectElement.appendChild(option);
                    }
                });
            } else {
                console.error('Le fichier JSON ne contient pas de tableau "cities".');
            }

            // Initialisation de nice-select après ajout des options
            $(selectElement).niceSelect();
        })
        .catch(error => {
            console.error('Erreur lors du chargement des données JSON:', error);
        });
});




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