import angular from 'angular';
import { humanLibraryModule } from '../';

describe('service Library', function() {

  let Book;
  let library;
  let filter;
  let every;

  beforeEach(function() {

    // create mocks
    Book = jasmine.createSpy('Book');
    every = jasmine.createSpy('every');
    filter = function() {
      return every;
    };

    angular.mock.module(humanLibraryModule, function($provide) {
      $provide.value('Book', Book);
      $provide.value('$filter', filter);
    });

    angular.mock.inject(['$injector',
      function($injector) {
        library = new($injector.get('Library'))();
      }
    ]);

  });

  it('should have no books', function() {
    expect(library.books.length).toBe(0);
  });

  describe('admitBook() method', function() {

    it('should create book entry', function() {
      library.admitBook(new Book());
      expect(library.books.length).toBe(1);
      expect(library.books[0]).toEqual(jasmine.any(Book));
    });

    it('should create two diffrent book entries when called twice', function() {
      library.admitBook(new Book());
      library.admitBook(new Book());
      expect(library.books.length).toBe(2);
      expect(library.books[0]).toEqual(jasmine.any(Book));
      expect(library.books[1]).toEqual(jasmine.any(Book));
      expect(library.books[0]).not.toBe(library.books[1]);
    });

    it('should preserve old book entries when called more than once', function() {
      let firstBook;
      library.admitBook(new Book());
      firstBook = library.books[0];
      library.admitBook(new Book());
      expect(library.books).toContain(firstBook);
    });

  });
});
