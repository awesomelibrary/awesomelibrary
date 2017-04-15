import angular from 'angular';
import { arrangerModule } from '../global/arranger/index';
import { humanBookModule } from './humanBook/index';
import { humanBooksCardsDirective } from './_directives/humanBooksCards';
import { humanBookCardDirective } from './_directives/humanBookCard';
import { compareAvailableHumanBooksServiceFactory } from './_services/compareAvailableHumanBooks';
import { compareUnavailableHumanBooksServiceFactory } from './_services/compareUnavailableHumanBooks';

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
