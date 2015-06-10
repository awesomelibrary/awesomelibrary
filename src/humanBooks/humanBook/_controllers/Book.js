'use strict';

/**
 * @constructor
 * @ngInject
 */
function BookController($scope, $stateParams, $state, undo) {

  var vm = this;

  $scope.book = $scope.library.books[$stateParams.bookId];

  vm.delete = function() {
    var removedBook = $scope.book;
    $scope.library.deleteBook($scope.book);
    undo.done('manageBooks.actions.removed', function() {
      $scope.library.admitBook(removedBook);
    });
    $state.go('humanLibrary');
  };

}

module.exports = BookController;
