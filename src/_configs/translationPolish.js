function translationPolish($translateProvider) {
  'ngInject';

  $translateProvider.translations('pl', {
    title: 'Żywa Biblioteka',
    mainMenu: {
      header: 'Zywa Biblioteka',
      admitBook: 'Dodaj Żywą Książkę',
      startNewEdition: 'Rozpocznij nowę edycję',
      newEditionStarted: 'Nowa edycja rozpoczęta',
      exportLibrary: 'Zarchiwizuj aktualną edycję Żywej Biblioteki do pliku',
      importLibrary: 'Przywróc edycję Żywej Biblioteki z pliku archiwum',
      humanLibraryRecovered: 'Przywrócono edycję Żywej Biblioteki',
      showAvailable: 'Pokaż dostępne Żywe Książki w nowym oknie'
    },
    available: {
      header: 'Dostępne Żywe Książki',
      humanBooks: {
        helpHeader: 'Wybierz Żywą Książkę i przekarz bibliotekarzowi tytuł'
      }
    },
    undoBubble: {
      undo: 'Cofnij'
    },
    manageBooks: {
      namePlaceholder: 'Imię',
      titlePlaceholder: 'Tytuł',
      actions: {
        'return': 'Zwróć',
        returned: 'Zwrócono',
        rent: 'Wypożycz',
        rented: 'Wypożyczono',
        removed: 'Usunięto',
        makeUnavailable: 'Oznacz jako niedostępną',
        makeAvailable: 'Oznacz jako dostępną'
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
