document.addEventListener('DOMContentLoaded', function() {
    // Charger le fichier JSON contenant les villes
    fetch('data/villes.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de chargement du fichier JSON');
            }
            return response.json();
        })
        .then(data => {
            const selectElement = document.getElementById('inputDoctorName');
            
            // Ajouter une option de sélection par défaut
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = 'Sélectionner une ville';
            selectElement.appendChild(defaultOption);

            // Ajouter chaque ville à la liste déroulante
            if (Array.isArray(data.cities)) {
                data.cities.forEach(city => {
                    const option = document.createElement('option');
                    option.value = city.id; // Assigner l'id de la ville
                    option.textContent = city.name; // Afficher le nom de la ville
                    selectElement.appendChild(option);
                });
            } else {
                console.error('Le fichier JSON ne contient pas un tableau "cities".');
            }
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