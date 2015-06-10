'use strict';

module.exports = angular
  .module('humanLibrary.humanBooks', [
    require('./humanBook/').name
  ])
  .directive('humanBooksCards', require('./_directives/humanBooksCards'))
  .directive('humanBookCard', require('./_directives/humanBookCard'))
  .factory('Arranger', require('./_services/Arranger'))
  .factory('compareAvailableHumanBooks', require('./_services/compareAvailableHumanBooks'))
  .factory('compareUnavailableHumanBooks', require('./_services/compareUnavailableHumanBooks'));
