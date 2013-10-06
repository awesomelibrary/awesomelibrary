angular.module('humanLibrary.services', ['humanLibrary.filters']).
        factory('$rental', [function() {

                var Rental = function(period) {
                    this.period = angular.isDefined(period) ? period : 30000; //1800000;
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
                    if (null === this.currentRental && !this.break) {
                        this.currentRental = new $rental();
                        this.rentals.push(this.currentRental);
                    }
                };

                // Re-rent book
                Book.prototype.reRent = function() {
                    this.return();
                    this.rent();
                };

                // Cancel last rental
//                Book.prototype.cancelLastRental = function() {
//                    if (null !== this.currentRental) {
//                        this
//                    }
//                };

                // Return book
                Book.prototype.return = function() {
                    if (null !== this.currentRental) {
                        this.currentRental.returnedAt = (new Date()).getTime();
                        this.currentRental = null;
                    }
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
                    var index = this.books.indexOf(book);
                    if (index !== -1) {
                        this.books.splice(index, 1);
                    }
                    return index;
                };

                return Library;

            }]);