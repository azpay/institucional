
// Getting navigator language config
const navigatorLanguage = navigator.language.substring(0, 2);
let currentLanguage = navigatorLanguage;

// function setTypeWrite(value) {
//   document.getElementById('typed').setAttribute('data-type', value);
//   startTickWrite();
// }



let typed;

const options = (lang = currentLanguage) => i18next.init({
  lng: lang,
  resources: { // evtl. load via xhr https://github.com/i18next/i18next-xhr-backend
    en,
    pt,
    es,
    ch
  }
}, (err, t) => {
  typed = new Typed(".typed", {
    typeSpeed: 50,
    shuffle: true,
    backSpeed: 25,
    showCursor: false,
    loop: true,
    loopCount: Infinity,
    strings: JSON.parse(i18next.t('tick_text')),
  });
  // Initialize HTML5 i18next wrapper
  localize = locI18next.init(i18next);
  // Find the international classname
  localize('.international');

  const templateImage = '<img src="img/flag-' + currentLanguage + '.png" />';

  document.getElementById('current__language').innerHTML = templateImage;
  // Reset type write script
});

/**
 * To render the text in the new language selected
 * @param {string} option the selected language
 */
function handleLanguageChanging(option) {
  if (option !== currentLanguage) {
    console.log('Initialized');

    // If it is not the same language it should 'render' the text again
    currentLanguage = option;
    typed.stop();

    i18next.init(options(currentLanguage));
    
    document.getElementById('current__language').innerHTML = `<img src="img/flag-${currentLanguage}.png" />`;
  }
}

function handleURLChange( option )
{
  const href = window.location.href.split(/\?lang\=es|\?lang\=pt|\?lang\=en|\?lang\=ch/).join('') + '?lang=' + option;
  window.location.href = href;
}

// Initializing internationalization vendor lib
i18next.init(options);

//TypedJS Options
