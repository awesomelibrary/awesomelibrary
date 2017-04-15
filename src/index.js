import angular from 'angular';
import directiveAvailableHumanBooks from './directiveAvailableHumanBooks';
import ServiceReadersMonitorWindow from './ServiceReadersMonitorWindow';
import factoryGetBaseUrl from './global/url/factoryGetBaseUrl';

module.exports = angular
  .module('humanLibrary', [
    require('angular-animate'),
    require('angular-translate'),
    require('angular-ui-router'),

    require('./global/undo/'),

    require('./humanBooks/'),
    require('./availableHumanBooks/')
  ])
  .controller('LibraryController', require('./_controllers/Library'))
  .factory('Book', require('./_services/Book'))
  .factory('Library', require('./_services/Library'))
  .factory('libraryLocalStorage', require('./_services/libraryLocalStorage'))
  .factory('Rental', require('./_services/Rental'))
  .factory('libraryExport', require('./_services/libraryExport'))
  .factory('librarySerializer', require('./_services/librarySerializer'))
  .factory('getBaseUrl', factoryGetBaseUrl)
  .service('readersMonitorWindow', ServiceReadersMonitorWindow)
  .directive('hlBook', require('./_directives/hlBook'))
  .directive('hlImportLibrary', require('./_directives/hlImportLibrary'))
  .directive('hlFileInputWrapper', require('./_directives/hlFileInputWrapper'))
  .directive('hlFileInput', require('./_directives/hlFileInput'))
  .directive('hlChangeLanguage', require('./_directives/hlChangeLanguage'))
  .directive('link', require('./_directives/link'))
  .directive('indexStylesheet', require('./_directives/indexStylesheet'))
  .directive('topBar', require('./_directives/topBar'))
  .directive('availableHumanBooks', directiveAvailableHumanBooks)
  .filter('timer', require('./_filters/timer'))
  .value('stylesheet', {})
  .config(require('./_configs/router'))
  .config(require('./_configs/translation'))
  .config(require('./_configs/translationEnglish'))
  .config(require('./_configs/translationPolish'))
  .config(require('./_configs/animate'))
  .config(
    function($compileProvider, $locationProvider) {
      'ngInject';
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|blob):/);
      $locationProvider.html5Mode(true);
    })
  .name;
