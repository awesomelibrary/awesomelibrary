angular.module('humanLibrary.services', ['humanLibrary.filters']).
        factory('$rental', [function() {
                
                var Rental = function() {
                    this.rentedAt = (new Date()).getTime();
                    this.returnedAt = null;
                };
                
                return Rental;
                
            }]).
        factory('$book', ['$rental', function($rental) {

                // Book constructor
                var Book = function() {
                    this.rentals = [];
                    this.name = "";
                    this.currentRental = null;
                    this.break = false;
                };
                                
                // Begin new rental
                Book.prototype.rent = function() {
                    if  (null === this.currentRental && !this.break) {
                        this.currentRental = new $rental();
                        this.rentals.push(this.currentRental);
                    }
                };
                
                // Re-rent book
                Book.prototype.reRent = function() {
                    this.return();
                    this.rent();
                };
                
                // Return book
                Book.prototype.return = function() {
                    if  (null !== this.currentRental) {
                        this.currentRental.returnedAt = (new Date()).getTime();
                        this.currentRental = null;
                    }
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