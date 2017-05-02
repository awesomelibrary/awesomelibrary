import angular from 'angular';
import angularAnimate from 'angular-animate';
import { arrangerModule } from '../global/arranger/index';
import { availableHumanBookCardDirective } from './_directives/availableHumanBookCard';
import { availableHumanBooksCardsDirective } from './_directives/availableHumanBooksCards';

export const availableHumanBooksModule = angular
  .module('humanLibrary.availableHumanBooks', [
    angularAnimate,
    arrangerModule
  ])
  .directive('availableHumanBooksCards', availableHumanBooksCardsDirective)
  .directive('availableHumanBookCard', availableHumanBookCardDirective)
  .name;
