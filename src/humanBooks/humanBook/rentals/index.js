'use strict';

module.exports = require('angular')
  .module('humanLibrary.humanBooks.humanBook.rental', [])
  .controller('RentalsController', require('./_controllers/RentalsController'))
  .name;
