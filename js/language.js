$(document).ready(function () {
    getLanguage();
    $('#item1').text(language.salutation);
});

var language;

function getLanguage() {
    (localStorage.getItem('language') == null) ? setLanguage('en') : false;
    $.ajax({
        url: './language/' + localStorage.getItem('language') + '.json',
        dataType: 'json', async: false, dataType: 'json',
        success: function (lang) { language = lang }
    });
}

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    location.reload();
}