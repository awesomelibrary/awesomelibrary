export const librarySerializerServiceFactory = ['$window', 'Library', 'Book', 'Rental', function($window, Library, Book, Rental) {

  function LibrarySerializer() {

    this.serialize = function(library) {
      return $window.angular.toJson(library);
    };

    this.deserialize = function(libraryJson) {

      const library = $window.angular.fromJson(libraryJson);
      const libraryDeserialized = new Library();

      $window.angular.extend(libraryDeserialized, library);
      libraryDeserialized.startDate = new Date(libraryDeserialized.startDate);

      if (libraryDeserialized.formatVersion === 'v1.0.0') {
        libraryDeserialized.books.forEach(function(book) {
          book.available = true;
        });
        libraryDeserialized.formatVersion = '2.0.0';
      }

      $window.angular.forEach(libraryDeserialized.books, function(book, bookIndex) {

        const bookModel = new Book();

        $window.angular.extend(bookModel, book);

        $window.angular.forEach(bookModel.rentals, function(rental, rentalIndex) {
          this[rentalIndex] = $window.angular.extend(new Rental(), rental);
        }, bookModel.rentals);

        this[bookIndex] = bookModel;

      }, libraryDeserialized.books);

      return libraryDeserialized;

    };

  }

  return new LibrarySerializer();

}];
