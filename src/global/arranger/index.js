'use strict';

module.exports = angular
  .module('humanLibrary.global.arranger', [])
  .factory('Arranger', require('./_services/Arranger'));
