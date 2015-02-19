'use strict';

/**
 * @ngInject
 */
function routerConfig($stateProvider) {

  $stateProvider.state('humanLibrary.book', {
    url: 'book/:bookId',
    controller: 'BookController',
    controllerAs: 'vm',
    templateUrl: 'humanLibrary/book/_templates/book.html'
  });

}

module.exports = routerConfig;
