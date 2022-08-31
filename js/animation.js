document.addEventListener("DOMContentLoaded", function (event) {
    var languageButton = document.querySelector('#globe');

    languageButton.onmouseover = function () {
        languageButton.svgatorPlayer.play();
    };
});