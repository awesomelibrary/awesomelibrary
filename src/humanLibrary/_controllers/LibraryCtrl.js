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

  var vm = this;

  vm.library = libraryLocalStorage.load();

  if ($window.angular.isUndefined(vm.library)) {
    vm.library = new Library();
    libraryLocalStorage.save(vm.library);
  }

  $scope.$watch('vm.library', function(newLibrary) {
    libraryLocalStorage.save(newLibrary);
    $scope.libraryExportUrl = libraryExport(newLibrary);
  }, true);

  $scope.rentBook = function(book) {
    book.rent(new Rental());
  };

  $scope.admitBook = function() {
    vm.library.admitBook(new Book());
  };

  $scope.newEdition = function() {
    vm.library = new Library();
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

  var ticker = new Ticker();

}

module.exports = LibraryCtrl;
