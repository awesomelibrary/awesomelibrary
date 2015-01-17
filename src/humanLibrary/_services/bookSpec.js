describe("service book", function() {

  var Book, Rental;

  beforeEach(function() {

    angular.mock.module('humanLibrary');
    angular.mock.inject(['$injector', function($injector) {
      Book = $injector.get('Book');
      Rental = $injector.get('Rental');
    }]);
  });

  it("should not be rented", function() {
    var book = new Book();

    expect(book.isRented()).toBe(false);
  });

  it("should not have current rental", function() {
    var book = new Book();

    expect(book.currentRental()).toBeNull();
  });

  it("should not cancel last rental", function() {
    var book = new Book();
    book.cancelRental();
    expect(book.rentals.length).toEqual(0);
  });

  describe("after rent", function() {

    it("should be rented", function() {
      var rental = new Rental(),
        book = new Book();

      book.rent(rental);
      expect(book.isRented()).toBe(true);
    });

    it("should have current rental", function() {
      var rental = new Rental(),
        book = new Book();

      book.rent(rental);
      expect(book.currentRental()).toBe(rental);
    });

    it("should add rental to rental list", function() {
      var rental = new Rental(),
        book = new Book();

      book.rent(rental);
      expect(book.rentals.indexOf(rental)).not.toEqual(-1);
    });

    it("can't be rented", function() {
      var rental = new Rental(),
        book = new Book();

      book.rent(new Rental());
      book.rent(rental);
      expect(book.currentRental()).not.toBe(rental);
      expect(book.rentals.indexOf(rental)).toEqual(-1);
    });

    it("should cancel last rental", function() {
      var rental = new Rental(),
        book = new Book();

      book.rent(rental);
      book.cancelRental();
      expect(book.rentals.length).toEqual(0);
      expect(book.currentRental()).toBe(null);
      expect(book.isRented()).toBe(false);
    });

  });

  describe("after return", function() {

    it("should not be rented", function() {
      var rental = new Rental(),
        book = new Book();

      book.rent(rental);
      book.
      return();
      expect(book.isRented()).toBe(false);
    });

    it("should not have current rental", function() {
      var rental = new Rental(),
        book = new Book();

      book.rent(rental);
      book.
      return();
      expect(book.currentRental()).toBeNull();
    });

  });

});
