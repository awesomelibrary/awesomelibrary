describe("service libraryLocalStorage", function() {

  var Library, libraryLocalStorage, Rental, Book;

  beforeEach(function() {

    angular.mock.module('humanLibrary');
    angular.mock.inject(['$injector', function($injector) {
      Library = $injector.get('Library');
      Book = $injector.get('Book');
      Rental = $injector.get('Rental');
      libraryLocalStorage = $injector.get('libraryLocalStorage');
    }]);
  });

  it("should save library to local sotrage", function() {
    var library = new Library();

    libraryLocalStorage.save(library);
  });

  it("should load empty library from local sotrage", function() {
    var loadedLibrary, library = new Library();

    libraryLocalStorage.save(library);
    loadedLibrary = libraryLocalStorage.load();
    expect(loadedLibrary).toEqual(library);
  });

  it("should load library with one book from local sotrage", function() {
    var loadedLibrary, library = new Library();

    library.admitBook(new Book());
    libraryLocalStorage.save(library);
    loadedLibrary = libraryLocalStorage.load();
    expect(loadedLibrary).toEqual(library);
  });

  it("should load library with one book with one rental from local sotrage", function() {
    var loadedLibrary, library = new Library();

    library.admitBook(new Book());
    library.books[0].rent(new Rental());
    libraryLocalStorage.save(library);
    loadedLibrary = libraryLocalStorage.load();
    expect(loadedLibrary).toEqual(library);
  });

});
