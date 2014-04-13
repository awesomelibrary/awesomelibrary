describe("service libraryLocalStorage", function() {

    var Library, libraryLocalStorage, Rental, Book;

    beforeEach(function() {

        module('humanLibrary.services');
        inject(['$injector', function($injector) {
                Library = $injector.get('library');
                Book = $injector.get('book');
                Rental = $injector.get('rental');
                libraryLocalStorage = $injector.get('libraryLocalStorage');
            }]);
    });

    it("should save library to local sotrage", function() {
        var library = new Library();
        
        libraryLocalStorage.save(library);
    });

    it("should load empty library from local sotrage", function() {
        var loadedLibrary,
            library = new Library();
        
        libraryLocalStorage.save(library);
        loadedLibrary = libraryLocalStorage.load();
        expect(loadedLibrary).toEqual(library);
    });

    it("should load library with one book from local sotrage", function() {
        var loadedLibrary,
            library = new Library();
        
        library.admitBook(new Book());
        libraryLocalStorage.save(library);
        loadedLibrary = libraryLocalStorage.load();
        expect(loadedLibrary).toEqual(library);
    });

    it("should load library with one book with one rental from local sotrage", function() {
        var loadedLibrary,
            library = new Library();
        
        library.admitBook(new Book());
        library.books[0].rent(new Rental());
        libraryLocalStorage.save(library);
        loadedLibrary = libraryLocalStorage.load();
        expect(loadedLibrary).toEqual(library);
    });

});