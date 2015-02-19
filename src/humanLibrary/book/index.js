'use strict';

module.exports = angular
  .module('humanLibrary.book', [])
  .controller('BookController', require('./_controllers/BookController'))
  .config(require('./_configs/router'));
