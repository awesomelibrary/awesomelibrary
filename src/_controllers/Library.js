/**
 * @param $scope
 * @param $timeout
 * @param libraryLocalStorage
 * @param Rental
 * @param Book
 * @param Library
 * @constructor
 * @ngInject
 */
function LibraryController($window, $scope, $timeout, libraryLocalStorage, libraryExport, Rental, Book, Library, undo) {

  var Ticker;

  $scope.library = libraryLocalStorage.load();

  if ($window.angular.isUndefined($scope.library)) {
    $scope.library = new Library();
    libraryLocalStorage.save($scope.library);
  }

  $scope.$watch('library', function(newLibrary) {
    libraryLocalStorage.save(newLibrary);
    $scope.libraryExportUrl = libraryExport(newLibrary);
  }, true);

  $scope.rentBook = function(book) {
    var rental = new Rental();
    book.rent(rental);
    $scope.unavailableHumanBooksArranger.arrange();
    undo.done('manageBooks.actions.rented', function() {
      book.cancelRental(rental);
    });
  };

  $scope.returnHumanBook = function(book) {
    var rental = book.return();
    undo.done('manageBooks.actions.returned', function() {
      rental.reopen();
    });
  };

  $scope.admitBook = function() {
    $scope.library.admitBook(new Book());
  };

  $scope.newEdition = function() {
    var oldLibrary = $scope.library;
    $scope.library = new Library();
    undo.done('mainMenu.newEditionStarted', function() {
      $scope.library = oldLibrary;
    });
  };

  $scope.toggleHumanBookAvailable = function(book) {
    book.available = !book.available;
    undo.bubble.dismiss();
  };

  $scope.onlyAvailable = function(humanBook) {
    return humanBook.isRentable();
  };

  // Ticker
  Ticker = (function() {

    function Ticker() {
      this.start();
    }

    Ticker.prototype.start = function() {
      var that = this;
      $scope.$broadcast('tick');
      this.timeoutId = $timeout(function() {
        that.start();
      }, 1000);
    };

    return Ticker;

  })();

  new Ticker();

}

module.exports = LibraryController;
