'use strict';

module.exports = require('angular')
  .module('humanLibrary.global.arranger', [])
  .factory('Arranger', require('./_services/Arranger'))
  .name;
