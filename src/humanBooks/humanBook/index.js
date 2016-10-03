module.exports = require('angular')
  .module('humanLibrary.humanBooks.humanBook', [
    require('angular-ui-router'),
    require('./rentals/'),
    require('../../global/undo/')
  ])
  .controller('BookController', require('./_controllers/Book'))
  .config(require('./_configs/router'))
  .name;
