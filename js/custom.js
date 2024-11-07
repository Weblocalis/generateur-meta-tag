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
    fetch('data/villes.json')  // Assurez-vous que le fichier JSON est accessible à cette URL
        .then(response => response.json())  // Convertir la réponse en JSON
        .then(data => {
            const selectElement = document.getElementById('inputDoctorName');  // Sélectionner le <select> par son id

            // Créer une option "All Locations" (toutes les localisations)
            const allLocationsOption = document.createElement('option');
            allLocationsOption.value = '';
            allLocationsOption.textContent = 'Toutes les localisations';
            selectElement.appendChild(allLocationsOption);

            // Ajouter les villes depuis le fichier JSON
            data.cities.forEach(city => {
                const option = document.createElement('option');
                option.value = city.id;  // L'ID correspond au numéro de département
                option.textContent = city.name;  // Le nom de la ville
                selectElement.appendChild(option);  // Ajouter l'option au <select>
            });
        })
        .catch(error => console.error('Erreur lors du chargement des données JSON:', error));
});
