'use strict';

module.exports = angular
  .module('humanLibrary.humanBooks.humanBook', [
    require('angular-ui-router'),
    require('./rentals/index').name,
    require('../../global/undo/').name
  ])
  .controller('BookController', require('./_controllers/Book'))
  .config(require('./_configs/router'));
