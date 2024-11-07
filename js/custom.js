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
    fetch('https://weblocalis.github.io/boostifyseo-directory/data/villes.json')  // Remplacez le chemin par l'URL complète de votre fichier JSON
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de chargement du fichier JSON');
            }
            return response.json();  // Convertir la réponse en JSON
        })
        .then(data => {
            const selectElement = document.getElementById('inputDoctorName');  // Sélectionner le <select> par son id

            // Vérifier si le <select> existe
            if (!selectElement) {
                console.error('Element <select> avec l\'id "inputDoctorName" non trouvé');
                return;
            }

            // Vider les options existantes (en cas de réexécution du script)
            selectElement.innerHTML = '';

            // Créer une option "All Locations" (toutes les localisations)
            const allLocationsOption = document.createElement('option');
            allLocationsOption.value = '';
            allLocationsOption.textContent = 'Toutes les localisations';
            selectElement.appendChild(allLocationsOption);

            // Vérifier si 'cities' existe et est un tableau
            if (Array.isArray(data.cities) && data.cities.length > 0) {
                data.cities.forEach(city => {
                    const option = document.createElement('option');
                    option.value = city.id;  // L'ID correspond au numéro de département
                    option.textContent = city.name;  // Le nom de la ville
                    selectElement.appendChild(option);  // Ajouter l'option au <select>
                });
            } else {
                console.error('Le fichier JSON ne contient pas de tableau "cities" valide ou le tableau est vide.');
            }
        })
        .catch(error => {
            console.error('Erreur lors du chargement des données JSON:', error);
        });
});
