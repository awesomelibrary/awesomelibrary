export const translationEnglishConfig = ['$translateProvider', function($translateProvider) {

  $translateProvider.translations('en', {
    title: 'Living library',
    mainMenu: {
      header: 'Living library',
      admitBook: 'Add Human Book',
      startNewEdition: 'Start new edition',
      newEditionStarted: 'New edition started',
      exportLibrary: 'Archive current livingl Library edition to file',
      importLibrary: 'Recover living library edition from archive file',
      humanLibraryRecovered: 'living library edition recovered',
      showAvailable: 'Show available Human Books in new window'
    },
    available: {
      header: 'Available Human Books',
      humanBooks: {
        helpHeader: 'Find title and pass it to a librarian'
      }
    },
    undoBubble: {
      undo: 'Undo'
    },
    manageBooks: {
      namePlaceholder: 'Name',
      titlePlaceholder: 'Title',
      actions: {
        return: 'Return',
        returned: 'Returned',
        rent: 'Loan',
        rented: 'Loaned',
        removed: 'Removed',
        makeUnavailable: 'Mark as unavailable',
        makeAvailable: 'Mark as available'
      }
    },
    book: {
      numberOfRentals: {
        prefix: 'Loaned',
        suffix: 'times'
      }
    },
    footer: {
      file: 'File bug report, leave suggestion or ask question'
    },
    search: {
      placeholder: 'Start typing to search'
    }
  });

}];
