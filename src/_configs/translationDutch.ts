export const translationDutchConfig = ['$translateProvider', function($translateProvider) {

  $translateProvider.translations('nl', {
    title: 'Living library',
    mainMenu: {
      header: 'Living library',
      admitBook: 'Voeg Levend Boek toe',
      startNewEdition: 'Start een nieuwe editie',
      newEditionStarted: 'Nieuwe editie gestart',
      exportLibrary: ' Sla deze living library editie op in een bestand',
      importLibrary: 'Herstel living library editie via een opgeslagen bestand',
      humanLibraryRecovered: 'Living library editie hersteld',
      showAvailable: 'Laat beschikbare boeken zien in nieuw venster'
    },
    available: {
      header: 'Beschikbare Levende Boeken',
      humanBooks: {
        helpHeader: 'Kies een titel en geef het door'
      }
    },
    undoBubble: {
      undo: 'Herstel'
    },
    manageBooks: {
      namePlaceholder: 'Naam',
      titlePlaceholder: 'Titel',
      actions: {
        return: 'Terug',
        returned: 'Geretourneerd',
        rent: 'Leen uit',
        rented: 'Uitgeleend',
        removed: 'Verwijderd',
        makeUnavailable: ' Markeer als onbeschikbaar',
        makeAvailable: 'Markeer als beschikbaar'
      }
    },
    book: {
      numberOfRentals: {
        prefix: 'Uitgeleend',
        suffix: 'Aantal'
      }
    },
    footer: {
      file: 'File bug report, leave suggestion or ask question'
    },
    search: {
      placeholder: ' Typ hier om te zoeken'
    }
  });

}];

