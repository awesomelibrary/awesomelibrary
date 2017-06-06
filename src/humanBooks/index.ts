import angular from 'angular';
import { arrangerModule } from '../global/arranger/index';
import { humanBookCardDirective } from './_directives/humanBookCard';
import { humanBooksCardsDirective } from './_directives/humanBooksCards';
import { compareAvailableHumanBooksServiceFactory } from './_services/compareAvailableHumanBooks';
import { compareUnavailableHumanBooksServiceFactory } from './_services/compareUnavailableHumanBooks';
import { humanBookModule } from './humanBook/index';

export const humanBooksModule = angular
  .module('humanLibrary.humanBooks', [
    arrangerModule,
    humanBookModule
  ])
  .directive('humanBooksCards', humanBooksCardsDirective)
  .directive('humanBookCard', humanBookCardDirective)
  .factory('compareAvailableHumanBooks', compareAvailableHumanBooksServiceFactory)
  .factory('compareUnavailableHumanBooks', compareUnavailableHumanBooksServiceFactory)
  .name;
