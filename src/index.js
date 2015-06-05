'use strict';

require('angular');
require('angular-animate');
require('angular-translate');

angular
  .module('humanLibrary', [
    'ngAnimate',
    'pascalprecht.translate',
    require('angular-ui-router'),

    require('../.tmp/templates').name,
    require('./humanBooks/').name
  ])
  .controller('LibraryCtrl', require('./_controllers/LibraryCtrl'))
  .factory('Book', require('./_services/Book'))
  .factory('Library', require('./_services/Library'))
  .factory('libraryLocalStorage', require('./_services/libraryLocalStorage'))
  .factory('Rental', require('./_services/Rental'))
  .factory('libraryExport', require('./_services/libraryExport'))
  .factory('librarySerializer', require('./_services/librarySerializer'))
  .directive('hlBook', require('./_directives/hlBook'))
  .directive('hlImportLibrary', require('./_directives/hlImportLibrary'))
  .directive('hlFileInputWrapper', require('./_directives/hlFileInputWrapper'))
  .directive('hlFileInput', require('./_directives/hlFileInput'))
  .directive('hlChangeLanguage', require('./_directives/hlChangeLanguage'))
  .filter('timer', require('./_filters/timer'))
  .config(require('./_configs/router'))
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
        title: 'Żywa Biblioteka Polska',
        mainMenu: {
          header: 'Zywa Biblioteka Polska',
          admitBook: '+ Przyjmij książkę',
          newEdition: 'Nowa edycja',
          exportLibrary: 'Eksportuj bibliotekę',
          importLibrary: 'Importuj bibliotekę'
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

      // English translation
      $translateProvider.translations('en', {
        title: 'Human Library Poland',
        mainMenu: {
          header: 'Human Library Poland',
          admitBook: '+ Admit book',
          newEdition: 'New edition',
          exportLibrary: 'Export library',
          importLibrary: 'Import library'
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

      $translateProvider.preferredLanguage('en');
    });
