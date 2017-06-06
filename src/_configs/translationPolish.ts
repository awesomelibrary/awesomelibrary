export const translationPolishConfig = ['$translateProvider', function($translateProvider) {

  $translateProvider.translations('pl', {
    title: 'Human Library Services',
    mainMenu: {
      header: 'Human Library Services',
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
        helpHeader: 'Znajdź tytuł, który chcesz wypożyczyć i przekaż go bibliotekarzowi'
      }
    },
    undoBubble: {
      undo: 'Cofnij'
    },
    manageBooks: {
      namePlaceholder: 'Imię',
      titlePlaceholder: 'Tytuł',
      actions: {
        return: 'Zwróć',
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
      file: 'Zgłoś błąd, zostaw sugestię lub zadaj pytanie'
    },
    search: {
      placeholder: 'Zacznij pisać aby wyszukać'
    }
  });

}];
