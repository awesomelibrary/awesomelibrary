'use strict';

/**
 * @param $window
 * @param library
 * @param book
 * @param rental
 * @returns {libraryLocalStorageServiceFactory.LibraryLocalStorage}
 * @ngInject
 */
function libraryLocalStorageServiceFactory($window, Library, Book, Rental) {

  function LibraryLocalStorage() {}

  LibraryLocalStorage.prototype.save = function(library) {
    if ($window.angular.isUndefined($window.Storage)) {
      return;
    }
    $window.localStorage.library = $window.angular.toJson(library);
  };

  LibraryLocalStorage.prototype.load = function() {

    var library;

    if ($window.angular.isUndefined($window.Storage)) {
      return new Library();
    }
    if ($window.angular.isUndefined($window.localStorage.library)) {
      return new Library();
    }

    library = $window.angular.fromJson($window.localStorage.library);

    $window.angular.forEach(library.books, function(book, bookIndex) {

      $window.angular.forEach(book.rentals, function(rental, rentalIndex) {
        this[rentalIndex] = $window.angular.extend(new Rental(), rental);
      }, book.rentals);

      this[bookIndex] = $window.angular.extend(new Book(), book);

    }, library.books);

    library = $window.angular.extend(new Library(), library);

    return library;
  };

  return new LibraryLocalStorage();

}

module.exports = libraryLocalStorageServiceFactory;
