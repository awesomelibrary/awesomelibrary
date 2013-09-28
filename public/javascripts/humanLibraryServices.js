angular.module('humanLibrary.services', ['humanLibrary.filters']).
        factory('$book', [function() {

                // Book constructor
                var Book = function() {
                    this.name = "";
                };

                return Book;

            }]).
        factory('$library', ['$filter', '$book', function($filter, $book) {

                var every = $filter('every');

                // Library constructor
                var Library = function() {
                    this.books = [];
                    this.groupedBooks = [];
                    this.booksInGroup = 3;
                };

                // Adding book to the library
                Library.prototype.addBook = function() {
                    this.books.push(new $book());
                    this.regroupBooks();
                };

                // Deleting book from the library
                Library.prototype.deleteBook = function(book) {
                    if (angular.isArray(this.books)) {
                        var index = this.books.indexOf(book);
                        if (index !== -1) {
                            this.books.splice(index, 1);
                            this.regroupBooks();
                        }
                        return index;
                    }
                    return -1;
                };

                Library.prototype.regroupBooks = function() {
                    this.groupedBooks = every(this.books, this.booksInGroup);
                };

                return Library;

            }]);