'use strict';

/**
 * @ngInject
 */
function translationEnglish($translateProvider) {

  $translateProvider.translations('en', {
    title: 'Human Library Poland',
    mainMenu: {
      header: 'Human Library Poland',
      admitBook: '+ Add Human Book',
      newEdition: 'New edition',
      exportLibrary: 'Archive current Human Library edition to file',
      importLibrary: 'Recover Human Library edition from archive file'
    },
    manageBooks: {
      namePlaceholder: 'Name',
      titlePlaceholder: 'Title',
      actions: {
        'return': 'Return',
        rent: 'Rent',
        cancelRental: 'Cancel'
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