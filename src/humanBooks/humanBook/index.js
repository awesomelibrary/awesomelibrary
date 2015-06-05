'use strict';

module.exports = angular
  .module('humanLibrary.humanBooks.humanBook', [
    require('angular-ui-router'),
    require('./rentals/index').name
  ])
  .controller('BookController', require('./_controllers/BookController'))
  .config(require('./_configs/router'));
