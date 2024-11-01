$(document).ready(function () {
    $('.nav-toggle').on('click', function (e) {
        e.preventDefault();
        $('#nav').toggleClass('show'); // Toggle the 'show' class to open/close the menu
    });
});