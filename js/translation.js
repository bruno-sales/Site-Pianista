let translations = {};

let language = localStorage.getItem("language") ? localStorage.getItem("language") : 'pt_br';
let languageFile = "pt_br.json"

switch(language) {
    case "pt_br":
        languageFile = "pt_br.json";
        break;
    case "en_us":
        languageFile = "en_us.json";
        break;    
    case "fr_fr":
        languageFile = "fr_fr.json";
        break;     
    default:
        languageFile = "pt_br.json"
        break;
}

const fetchContent = () => {

    return fetch(`i18n/${languageFile}`)
        .then((response) => { return response.json(); })
        .then((data) => { 
            translations = data;
            translatePage();
        });
};

fetchContent();

const translatePage = () => {

    document.querySelectorAll('[translate]').forEach((element) => {
        let translationKey = element.getAttribute('translate');

        if(!translationKey)
            translationKey = element.innerText.trim();

        let translation = translations[translationKey];

        if(translation)
            element.innerHTML = translation;
    });

    document.querySelectorAll('[placeholder-key]').forEach((element) => {
        let key = element.getAttribute('placeholder-key');
        let translation = translations[key];

        if(translation)
            element.placeholder = translation;
    });

    document.querySelectorAll('[alt-translate]').forEach((element) => {
        let key = element.getAttribute('alt');
        let translation = translations[key];

        if(translation)
            element.placeholder = translation;
    });

};

function setLanguage(lang){ 
    localStorage.setItem("language",lang);
}