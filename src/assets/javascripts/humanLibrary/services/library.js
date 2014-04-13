angular.module('humanLibrary.services').
factory('library', [function () {

    // Library constructor
    var Library = function () {
        this.books = [];
    };

    // Adding book to the library
    Library.prototype.admitBook = function (book) {
        this.books.push(book);
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