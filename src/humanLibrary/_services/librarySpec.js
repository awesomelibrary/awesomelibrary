describe("service library", function() {

  var book, library, filter, every;

  beforeEach(function() {


    // create mocks
    book = jasmine.createSpy('book');
    every = jasmine.createSpy('every');
    filter = function(name) {
      return every;
    };

    angular.mock.module('humanLibrary', function($provide) {
      $provide.value('Book', book);
      $provide.value('$filter', filter);
    });

    angular.mock.inject(['$injector', function($injector) {
      library = new($injector.get('Library'))();
    }]);
  });

  it("should have no books", function() {
    expect(library.books.length).toBe(0);
  });

  describe('admitBook() method', function() {

    it("should create book entry", function() {
      library.admitBook(new book());
      expect(library.books.length).toBe(1);
      expect(library.books[0]).toEqual(jasmine.any(book));
    });

    it("should create two diffrent book entries when called twice", function() {
      library.admitBook(new book());
      library.admitBook(new book());
      expect(library.books.length).toBe(2);
      expect(library.books[0]).toEqual(jasmine.any(book));
      expect(library.books[1]).toEqual(jasmine.any(book));
      expect(library.books[0]).not.toBe(library.books[1]);
    });

    it("should preserve old book entries when called more than once", function() {
      library.admitBook(new book());
      var firstBook = library.books[0];
      library.admitBook(new book());
      expect(library.books).toContain(firstBook);
    });

  });
});
