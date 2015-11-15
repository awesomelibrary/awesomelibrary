'use strict';

module.exports = require('angular')
  .module('humanLibrary.availableHumanBooks', [
    'ngAnimate',
    require('../global/arranger/')
  ])
  .directive('showAvailableHumanBooks', require('./_directives/showAvailableHumanBooks'))
  .directive('availableHumanBooksCards', require('./_directives/availableHumanBooksCards'))
  .directive('availableHumanBookCard', require('./_directives/availableHumanBookCard'))
  .name;
