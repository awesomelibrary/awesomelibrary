function BookController($scope, $stateParams, $state, $window, undo) {
  'ngInject';

  var vm = this;

  $scope.book = $scope.library.books[$stateParams.bookId];

  vm.delete = function() {
    var removedBook = $scope.book;
    $scope.library.deleteBook($scope.book);
    $window.ga('send', 'event', 'Human Library', 'Deleted Human Book', removedBook.title);
    undo.done('manageBooks.actions.removed', function() {
      $scope.library.admitBook(removedBook);
    });
    $state.go('humanLibrary');
  };

}

module.exports = BookController;
