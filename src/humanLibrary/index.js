'use strict';

require('jquery');
require('angular');
require('angular-translate');

angular
  .module('humanLibrary', ['pascalprecht.translate'])
  .controller('LibraryCtrl', require('./_controllers/LibraryCtrl'))
  .controller('LibraryExportCtrl', require('./_controllers/LibraryExportCtrl'))
  .factory('Book', require('./_services/Book'))
  .factory('Library', require('./_services/Library'))
  .factory('libraryLocalStorage', require('./_services/libraryLocalStorage'))
  .factory('Rental', require('./_services/Rental'))
  .factory('libraryExport', require('./_services/libraryExport'))
  .factory('librarySerializer', require('./_services/librarySerializer'))
  .directive('booksContainer', require('./_directives/booksContainer'))
  .directive('hlBook', require('./_directives/hlBook'))
  .filter('status', require('./_filters/status'))
  .filter('timer', require('./_filters/timer'))
  .value('$bookCard', {
    width: 300,
    height: 167
  })
  .config(
    /** @ngInject */
    function($compileProvider) {
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|blob):/);
    })
  .config(
    /** @ngInject */
    function($translateProvider) {

      // Polish translation
      $translateProvider.translations('pl', {
        title: 'Żywa Biblioteka',
        mainMenu: {
          header: 'Żywa Biblioteka',
          admitBook: '+ Przyjmij książkę',
          newEdition: 'Nowa edycja',
          exportLibrary: 'Eksportuj'
        },
        manageBooks: {
          namePlaceholder: 'Imię...',
          titlePlaceholder: 'Tytuł...',
          actions: {
            'return': 'Zwróć',
            rent: 'Wypożycz',
            cancelRental: 'Anuluj'
          }
        }
      });

      // English translation
      $translateProvider.translations('en', {
        title: 'Human Library',
        mainMenu: {
          header: 'Human Library',
          admitBook: '+ Admit book',
          newEdition: 'New edition',
          exportLibrary: 'Export'
        },
        manageBooks: {
          namePlaceholder: 'Name...',
          titlePlaceholder: 'Title...',
          actions: {
            'return': 'Return',
            rent: 'Rent',
            cancelRental: 'Cancel'
          }
        }
      });

      $translateProvider.preferredLanguage('pl');
    });
