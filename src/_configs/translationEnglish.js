'use strict';

/**
 * @ngInject
 */
function translationEnglish($translateProvider) {

  $translateProvider.translations('en', {
    title: 'Human Library Poland',
    mainMenu: {
      header: 'Human Library Poland',
      admitBook: 'Add Human Book',
      startNewEdition: 'Start new edition',
      newEditionStarted: 'New edition started',
      exportLibrary: 'Archive current Human Library edition to file',
      importLibrary: 'Recover Human Library edition from archive file',
      humanLibraryRecovered: 'Human Library edition recovered',
      showAvailable: 'Show available Human Books in new window'
    },
    undoBubble: {
      undo: 'Undo'
    },
    manageBooks: {
      namePlaceholder: 'Name',
      titlePlaceholder: 'Title',
      actions: {
        'return': 'Return',
        returned: 'Returned',
        rent: 'Rent',
        rented: 'Rented',
        removed: 'Removed',
        makeUnavailable: 'Mark as unavailable',
        makeAvailable: 'Mark as available'
      }
    },
    book: {
      numberOfRentals: {
        prefix: 'Rented',
        suffix: 'times'
      }
    },
    footer: {
      madeBy: 'Made by',
      zaklinaczeKodu: 'Zaklinacze Kodu.',
      file: 'File bug report, suggestion or ask question.'
    }
  });

}

module.exports = translationEnglish;
