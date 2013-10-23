describe("library created by $library service", function() {
    
    var book, library, filter, every;
    
    beforeEach(function() {
        
        // lading module, which will be tested
        module('humanLibrary.services');
        
        // create mocks
        book = jasmine.createSpy('book');
        every = jasmine.createSpy('every');
        filter = function(name) {
            return every;
        };

        module(['$provide', function($provide) {
            $provide.value('$book', book);
            $provide.value('$filter', filter);
        }]);
    
        inject(['$injector', function($injector) {
            library = new ($injector.get('$library'))();
        }]);
    });
    
    it("should have no books", function() {
        expect(library.books.length).toBe(0);
    });

    describe('addBook() method', function() {

        it("should create book entry", function() {
            library.addBook();
            expect(library.books.length).toBe(1);
            expect(library.books[0]).toEqual(jasmine.any(book));
            expect(book.calls.length).toBe(1);
        });

        it("should create two diffrent book entries when called twice", function() {
            library.addBook();
            library.addBook();
            expect(library.books.length).toBe(2);
            expect(library.books[0]).toEqual(jasmine.any(book));
            expect(library.books[1]).toEqual(jasmine.any(book));
            expect(book.calls.length).toBe(2);
            expect(library.books[0]).not.toBe(library.books[1]);
        });

        it("should preserve old book entries when called more than once", function() {
            library.addBook();
            var firstBook = library.books[0];
            library.addBook();
            expect(library.books).toContain(firstBook);
        });
        
    });
});