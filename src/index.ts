/// <reference path="index.d.ts" />

import './index.scss';
import angular from 'angular';
import angularAnimate from 'angular-animate';
import angularTranslate from 'angular-translate';
import angularUiRouter from 'angular-ui-router';
import { undoModule } from './global/undo/index';
import { humanBooksModule } from './humanBooks/index';
import { availableHumanBooksModule } from './availableHumanBooks/index';
import { LibraryController } from './_controllers/Library';
import { BookServiceFactory } from './_services/Book';
import { LibraryServiceFactory } from './_services/Library';
import { libraryLocalStorageServiceFactory } from './_services/libraryLocalStorage';
import { RentalServiceFactory } from './_services/Rental';
import { libraryExportServiceFactory } from './_services/libraryExport';
import { librarySerializerServiceFactory } from './_services/librarySerializer';
import { factoryGetBaseUrl } from './global/url/factoryGetBaseUrl';
import { ServiceReadersMonitorWindow } from './ServiceReadersMonitorWindow';
import { hlBookDirective } from './_directives/hlBook';
import { hlImportLibraryDirective } from './_directives/hlImportLibrary';
import { hlFileInputWrapperDirective } from './_directives/hlFileInputWrapper';
import { hlFileInputDirective } from './_directives/hlFileInput';
import { hlChangeLanguageDirective } from './_directives/hlChangeLanguage';
import { linkDirective } from './_directives/link';
import { indexStylesheetDirective } from './_directives/indexStylesheet';
import { topBarDirective } from './_directives/topBar';
import { directiveAvailableHumanBooks } from './directiveAvailableHumanBooks';
import { timerFilterFactory } from './_filters/timer';
import { routerConfig } from './_configs/router';
import { translationConfig } from './_configs/translation';
import { translationEnglishConfig } from './_configs/translationEnglish';
import { translationPolishConfig } from './_configs/translationPolish';
import { animateConfig } from './_configs/animate';

export const humanLibraryModule =  angular
  .module('humanLibrary', [
    angularAnimate,
    angularTranslate,
    angularUiRouter,

    undoModule,

    humanBooksModule,
    availableHumanBooksModule
  ])
  .controller('LibraryController', LibraryController)
  .factory('Book', BookServiceFactory)
  .factory('Library', LibraryServiceFactory)
  .factory('libraryLocalStorage', libraryLocalStorageServiceFactory)
  .factory('Rental', RentalServiceFactory)
  .factory('libraryExport', libraryExportServiceFactory)
  .factory('librarySerializer', librarySerializerServiceFactory)
  .factory('getBaseUrl', factoryGetBaseUrl)
  .factory('readersMonitorWindow', ServiceReadersMonitorWindow)
  .directive('hlBook', hlBookDirective)
  .directive('hlImportLibrary', hlImportLibraryDirective)
  .directive('hlFileInputWrapper', hlFileInputWrapperDirective)
  .directive('hlFileInput', hlFileInputDirective)
  .directive('hlChangeLanguage', hlChangeLanguageDirective)
  .directive('link', linkDirective)
  .directive('indexStylesheet', indexStylesheetDirective)
  .directive('topBar', topBarDirective)
  .directive('availableHumanBooks', directiveAvailableHumanBooks)
  .filter('timer', timerFilterFactory)
  .value('stylesheet', {})
  .config(routerConfig)
  .config(translationConfig)
  .config(translationEnglishConfig)
  .config(translationPolishConfig)
  .config(animateConfig)
  .config(
    function($compileProvider, $locationProvider) {
      'ngInject';
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|blob):/);
      $locationProvider.html5Mode(true);
    })
  .name;
