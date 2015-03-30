'use strict';

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
function LibraryCtrl($window, $scope, $timeout, libraryLocalStorage, libraryExport, Rental, Book, Library) {

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
    book.rent(new Rental());
  };

  $scope.admitBook = function() {
    $scope.library.admitBook(new Book());
  };

  $scope.newEdition = function() {
    $scope.library = new Library();
  };

  // Ticker
  var Ticker = (function() {

    function Ticker() {
      this.start();
    }

    Ticker.prototype.start = function() {
      $scope.$broadcast('tick');
      var that = this;
      this.timeoutId = $timeout(function() {
        that.start();
      }, 1000);
    };

    return Ticker;

  })();

  new Ticker();

}

module.exports = LibraryCtrl;
