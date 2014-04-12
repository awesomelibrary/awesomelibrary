angular.module('humanLibrary.services', ['humanLibrary.filters']).
factory('$rental', [function () {

    var Rental = function (period) {
        this.period = angular.isDefined(period) ? period : 1800000;
        this.rentedAt = (new Date()).getTime();
        this.returnedAt = null;
    };

    // End rental
    Rental.prototype.end = function () {
        if (null === this.returnedAt) {
            this.returnedAt = (new Date()).getTime();
        }
    };

    // Reopen rental
    Rental.prototype.reopen = function () {
        this.returnedAt = null;
    };

    return Rental;

}]).
factory('$book', ['$rental', function ($rental) {

    // Book constructor
    var Book = function () {
        this.rentals = [];
        this.name = "";
        this.currentRental = null;
        this.
        break = false;
        this.notes = '';
    };

    // Begin new rental
    Book.prototype.rent = function () {
        this.
        return ();
        if (!this.
        break) {
            this.currentRental = new $rental();
            this.rentals.unshift(this.currentRental);
        }
    };

    // Deleting rental from the book
    Book.prototype.deleteRental = function (rental) {
        var index = this.rentals.indexOf(rental);
        if (index !== -1) {
            this.rentals.splice(index, 1);
        }
        return index;
    };

    // Cancel last rental
    Book.prototype.cancelLastRental = function () {
        if (null !== this.currentRental) {
            this.deleteRental(this.currentRental);
            this.currentRental = null;
        }
    };

    // Cancel last return
    Book.prototype.cancelLastReturn = function () {
        var that = this;
        var cancel = function () {
            var rental = that.rentals[0];
            rental.reopen();
            that.currentRental = rental;
        };
        if (this.isRented()) {
            if (this.rentals.length >= 2) {
                this.cancelLastRental();
                cancel();
            }
        } else if (this.rentals.length >= 1) {
            cancel();
        }
    };

    // Return book
    Book.prototype.
    return = function () {
        if (null !== this.currentRental) {
            this.currentRental.end();
            this.currentRental = null;
        }
    };

    // Check if book is rented
    Book.prototype.isRented = function () {
        return this.currentRental !== null;
    };

    return Book;

}]).
factory('$library', ['$book', function ($book) {

    // Library constructor
    var Library = function () {
        this.books = [];
    };

    // Adding book to the library
    Library.prototype.addBook = function () {
        this.books.push(new $book());
    };

    // Deleting book from the library
    Library.prototype.deleteBook = function (book) {
        var index = this.books.indexOf(book);
        if (index !== -1) {
            this.books.splice(index, 1);
        }
        return index;
    };

    return Library;

}]);