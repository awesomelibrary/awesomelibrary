'use strict';

require('jquery');
require('angular');
require('angular-translate');

angular
  .module('humanLibrary', ['pascalprecht.translate'])
  .controller('LibraryCtrl', require('../assets/javascripts/humanLibrary/controllers/LibraryCtrl'))
  .controller('LibraryExportCtrl', require('../assets/javascripts/humanLibrary/libraryExport/controllers/LibraryExportCtrl'))
  .factory('Book', require('../assets/javascripts/humanLibrary/services/book'))
  .factory('Library', require('../assets/javascripts/humanLibrary/services/library'))
  .factory('libraryLocalStorage', require('../assets/javascripts/humanLibrary/services/libraryLocalStorage'))
  .factory('Rental', require('../assets/javascripts/humanLibrary/services/rental'))
  .factory('libraryExport', require('../assets/javascripts/humanLibrary/libraryExport/services/libraryExport'))
  .directive('booksContainer', require('../assets/javascripts/humanLibrary/directives/booksContainer'))
  .directive('hlBook', require('../assets/javascripts/humanLibrary/directives/hlBook'))
  .filter('status', require('../assets/javascripts/humanLibrary/filters/status'))
  .filter('timer', require('../assets/javascripts/humanLibrary/filters/timer'))
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
