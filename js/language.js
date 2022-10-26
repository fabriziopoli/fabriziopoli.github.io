$(document).ready(function () {
    getLanguage();
    
    /*$('#home').text(language.home);
    $('#about').text(language.about);
    $('#contacts').text(language.contacts);*/
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