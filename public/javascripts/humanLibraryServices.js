angular.module('humanLibrary.services', []).
  factory('$book', [function() {

    // Book constructor
    var Book = function() {
    };
      
    return Book;
    
  }]).
  factory('$library', ['$book', function($book) {

    // Library constructor
    var Library = function() {
      this.books = [];
    };

    // Adding book to the library
    Library.prototype.addBook = function() {
      this.books.push(new $book());
    };

    // Deleting book from the library
    Library.prototype.deleteBook = function(book) {
      if (angular.isArray(this.books)) {
        var index = this.books.indexOf(book);
        if (index !== -1) { 
          this.books.splice(index, 1);
        }
        return index;
      }
      return -1;
    };

    return Library;
    
  }]);