'use strict';

/**
 * @constructor
 * @ngInject
 */
function BookController($scope, $stateParams, $state) {

  var vm = this;

  vm.book = $scope.library.books[$stateParams.bookId];

  vm.delete = function() {
    $scope.library.deleteBook(vm.book)
    $state.go('humanLibrary');
  }

}

module.exports = BookController;
