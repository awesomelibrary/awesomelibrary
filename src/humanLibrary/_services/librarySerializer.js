'use strict';

/**
 * @returns {LibrarySerializer}
 * @ngInject
 */
function librarySerializerServiceFactory($window, Library, Book, Rental) {

  function LibrarySerializer() {

    this.serialize = function(library) {
      return $window.angular.toJson(library);
    };

    this.deserialize = function(libraryJson) {

      var library = $window.angular.fromJson(libraryJson);

      $window.angular.forEach(library.books, function(book, bookIndex) {

        $window.angular.forEach(book.rentals, function(rental, rentalIndex) {
          this[rentalIndex] = $window.angular.extend(new Rental(), rental);
        }, book.rentals);

        this[bookIndex] = $window.angular.extend(new Book(), book);

      }, library.books);

      return $window.angular.extend(new Library(), library);

    };

  }

  return new LibrarySerializer();

}

module.exports = librarySerializerServiceFactory;
