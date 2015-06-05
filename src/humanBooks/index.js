'use strict';

module.exports = angular
  .module('humanLibrary.humanBooks', [
    require('./humanBook/').name
  ])
  .directive('humanBooksCards', require('./_directives/humanBooksCards'))
  .directive('humanBookCard', require('./_directives/humanBookCard'))
  .service('Arranger', require('./_services/Arranger'));
