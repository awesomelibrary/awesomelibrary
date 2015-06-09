'use strict';

/**
 * @ngInject
 */
function translationPolish($translateProvider) {

  $translateProvider.translations('pl', {
    title: 'Żywa Biblioteka Polska',
    mainMenu: {
      header: 'Zywa Biblioteka Polska',
      admitBook: '+ Dodaj Żywą Książkę',
      newEdition: 'Nowa edycja',
      exportLibrary: 'Zarchiwizuj aktualną edycję Żywej Biblioteki do pliku',
      importLibrary: 'Przywróc edycję Żywej Biblioteki z pliku archiwum'
    },
    manageBooks: {
      namePlaceholder: 'Imię',
      titlePlaceholder: 'Tytuł',
      actions: {
        'return': 'Zwróć',
        rent: 'Wypożycz',
        cancelRental: 'Anuluj'
      }
    },
    book: {
      numberOfRentals: {
        prefix: 'Wypożyczona',
        suffix: 'razy'
      }
    },
    footer: {
      madeBy: 'Stworzone przez',
      zaklinaczeKodu: 'Zaklinaczy Kodu.',
      file: 'Zgłoś błąd, sugestie lub zadaj pytanie.'
    }
  });

}

module.exports = translationPolish;