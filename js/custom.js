document.addEventListener('DOMContentLoaded', function() {
    fetch('data/json')  // Remplace par le chemin correct de ton fichier JSON
      .then(response => response.json())
      .then(data => {
        const selectElement = document.getElementById('inputDoctorName');
        data.cities.forEach(city => {
          const option = document.createElement('option');
          option.value = city.id;
          option.textContent = city.name;
          selectElement.appendChild(option);
        });
      })
      .catch(error => console.error('Erreur de chargement:', error));
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