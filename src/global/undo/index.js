module.exports = require('angular')
  .module('humanLibrary.global.undo', [])
  .directive('undoBubble', require('./_directives/undoBubble'))
  .factory('undo', require('./_serivces/undo'))
  .name;
