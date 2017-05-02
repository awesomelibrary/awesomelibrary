import angular from 'angular';
import { ArrangerServiceFactory } from './_services/Arranger';

export const arrangerModule = angular
  .module('humanLibrary.global.arranger', [])
  .factory('Arranger', ArrangerServiceFactory)
  .name;
