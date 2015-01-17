'use strict';

/**
 * @returns {Library}
 * @ngInject
 */
function libraryServiceFactory() {

  function Library() {
    this.books = [];
  }

  Library.prototype.admitBook = function(book) {
    this.books.push(book);
  };

  Library.prototype.deleteBook = function(book) {
    var index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
    return index;
  };

  return Library;

}

module.exports = libraryServiceFactory;
