/// <reference path='index.d.ts' />

import angularUiRouter from '@uirouter/angularjs';
import angular from 'angular';
import angularAnimate from 'angular-animate';
import angularCookies from 'angular-cookies';
import angularTranslate from 'angular-translate';
import 'angular-translate-storage-cookie';
import 'angular-translate-storage-local';
import { animateConfig } from './_configs/animate';
import { routerConfig } from './_configs/router';
import { translationConfig } from './_configs/translation';
import { translationEnglishConfig } from './_configs/translationEnglish';
import { translationPolishConfig } from './_configs/translationPolish';
import { LibraryController } from './_controllers/Library';
import { hlBookDirective } from './_directives/hlBook';
import { hlChangeLanguageDirective } from './_directives/hlChangeLanguage';
import { hlFileInputDirective } from './_directives/hlFileInput';
import { hlFileInputWrapperDirective } from './_directives/hlFileInputWrapper';
import { hlImportLibraryDirective } from './_directives/hlImportLibrary';
import {hlSearchDirective} from './_directives/hlSearch';
import { indexStylesheetDirective } from './_directives/indexStylesheet';
import { linkDirective } from './_directives/link';
import { topBarDirective } from './_directives/topBar';
import { timerFilterFactory } from './_filters/timer';
import { BookServiceFactory } from './_services/Book';
import { LibraryServiceFactory } from './_services/Library';
import { libraryExportServiceFactory } from './_services/libraryExport';
import { libraryLocalStorageServiceFactory } from './_services/libraryLocalStorage';
import { librarySerializerServiceFactory } from './_services/librarySerializer';
import { RentalServiceFactory } from './_services/Rental';
import { searcher } from './_services/searcher';
import { availableHumanBooksModule } from './availableHumanBooks/index';
import { directiveAvailableHumanBooks } from './directiveAvailableHumanBooks';
import { undoModule } from './global/undo/index';
import { factoryGetBaseUrl } from './global/url/factoryGetBaseUrl';
import { humanBooksModule } from './humanBooks/index';
import './index.scss';
import { ServiceReadersMonitorWindow } from './ServiceReadersMonitorWindow';
import {approximateTimerFactory} from './_filters/approximateTimer';
import {Ticker} from './_services/Ticker';

export const humanLibraryModule =  angular
  .module('humanLibrary', [
    angularAnimate,
    angularCookies,
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
  .service('searcher', searcher)
  .service('ticker', Ticker)
  .directive('hlBook', hlBookDirective)
  .directive('hlImportLibrary', hlImportLibraryDirective)
  .directive('hlFileInputWrapper', hlFileInputWrapperDirective)
  .directive('hlFileInput', hlFileInputDirective)
  .directive('hlChangeLanguage', hlChangeLanguageDirective)
  .directive('link', linkDirective)
  .directive('indexStylesheet', indexStylesheetDirective)
  .directive('topBar', topBarDirective)
  .directive('availableHumanBooks', directiveAvailableHumanBooks)
  .directive('hlSearch', hlSearchDirective)
  .filter('timer', timerFilterFactory)
  .filter('approximateTimer', approximateTimerFactory)
  .value('stylesheet', {})
  .config(routerConfig)
  .config(translationConfig)
  .config(translationEnglishConfig)
  .config(translationPolishConfig)
  .config(animateConfig)
  .config(
    ['$compileProvider', '$locationProvider', function($compileProvider, $locationProvider) {
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|blob):/);
      $locationProvider.html5Mode(true);
    }])
  .name;
