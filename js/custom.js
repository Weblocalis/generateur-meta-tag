document.addEventListener('DOMContentLoaded', function() {
    const inputElement = document.getElementById('inputDoctorName');
    const suggestionsList = document.getElementById('suggestionsList');

    // Charger le fichier JSON contenant les villes
    fetch('data/villes.json')
        .then(response => response.json())
        .then(data => {
            const cities = data.cities;

            // Fonction pour filtrer et afficher les suggestions
            inputElement.addEventListener('input', function() {
                const query = inputElement.value.toLowerCase();
                suggestionsList.innerHTML = ''; // Effacer les anciennes suggestions

                if (query) {
                    const filteredCities = cities.filter(city => city.name.toLowerCase().includes(query));
                    
                    if (filteredCities.length > 0) {
                        suggestionsList.style.display = 'block'; // Afficher les suggestions
                        filteredCities.forEach(city => {
                            const li = document.createElement('li');
                            li.classList.add('list-group-item');
                            li.textContent = city.name;
                            li.addEventListener('click', function() {
                                inputElement.value = city.name; // Remplir l'input avec la ville sélectionnée
                                suggestionsList.style.display = 'none'; // Cacher la liste des suggestions
                            });
                            suggestionsList.appendChild(li);
                        });
                    } else {
                        suggestionsList.style.display = 'none'; // Cacher la liste si aucune correspondance
                    }
                } else {
                    suggestionsList.style.display = 'none'; // Cacher la liste si l'input est vide
                }
            });
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