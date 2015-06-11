'use strict';

module.exports = angular
  .module('humanLibrary.availableHumanBooks', [
    'ngAnimate',
    require('../global/arranger/').name
  ])
  .directive('showAvailableHumanBooks', require('./_directives/showAvailableHumanBooks'))
  .directive('availableHumanBooksCards', require('./_directives/availableHumanBooksCards'))
  .directive('availableHumanBookCard', require('./_directives/availableHumanBookCard'));
