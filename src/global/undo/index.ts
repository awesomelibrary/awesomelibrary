import angular from 'angular';
import { undoBubbleDirective } from './_directives/undoBubble';
import { undoServiceFactory } from './_serivces/undo';

export const undoModule = angular
  .module('humanLibrary.global.undo', [])
  .directive('undoBubble', undoBubbleDirective)
  .factory('undo', undoServiceFactory)
  .name;
