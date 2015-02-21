'use strict';

module.exports = angular
  .module('humanLibrary.book', [
    require('angular-ui-router'),
    require('./rentals/').name
  ])
  .controller('BookController', require('./_controllers/BookController'))
  .config(require('./_configs/router'));
