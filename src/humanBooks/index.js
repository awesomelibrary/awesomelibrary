module.exports = require('angular')
  .module('humanLibrary.humanBooks', [
    require('../global/arranger/'),
    require('./humanBook/')
  ])
  .directive('humanBooksCards', require('./_directives/humanBooksCards'))
  .directive('humanBookCard', require('./_directives/humanBookCard'))
  .factory('compareAvailableHumanBooks', require('./_services/compareAvailableHumanBooks'))
  .factory('compareUnavailableHumanBooks', require('./_services/compareUnavailableHumanBooks'))
  .name;
