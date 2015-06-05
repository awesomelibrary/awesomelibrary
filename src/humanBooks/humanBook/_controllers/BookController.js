'use strict';

/**
 * @constructor
 * @ngInject
 */
function BookController($scope, $stateParams, $state) {

  var vm = this;

  $scope.book = $scope.library.books[$stateParams.bookId];

  vm.delete = function() {
    $scope.library.deleteBook($scope.book);
    $state.go('humanLibrary');
  };

}

module.exports = BookController;
