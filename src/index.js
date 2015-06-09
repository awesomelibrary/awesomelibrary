'use strict';

require('angular');
require('angular-animate');
require('angular-translate');

angular
  .module('humanLibrary', [
    'ngAnimate',
    'pascalprecht.translate',
    require('angular-ui-router'),

    require('./global/undo/').name,

    require('../.tmp/templates').name,
    require('./humanBooks/').name
  ])
  .controller('LibraryController', require('./_controllers/Library'))
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
  .config(require('./_configs/translation'))
  .config(require('./_configs/translationEnglish'))
  .config(require('./_configs/translationPolish'))
  .config(
    /** @ngInject */
    function($compileProvider) {
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|blob):/);
    });
