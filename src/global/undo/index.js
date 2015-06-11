'use strict';

module.exports = angular
  .module('humanLibrary.global.undo', [])
  .directive('undoBubble', require('./_directives/undoBubble'))
  .factory('undo', require('./_serivces/undo'));
