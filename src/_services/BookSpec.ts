import angular from 'angular';
import { humanLibraryModule } from '../';

describe('service Book', function() {

  var Book;
  var Rental;

  beforeEach(function() {

    angular.mock.module(humanLibraryModule);
    angular.mock.inject(['$injector',
      function($injector) {
        Book = $injector.get('Book');
        Rental = $injector.get('Rental');
      }
    ]);

    this.book = new Book();

  });

  it('should not be rented', function() {
    expect(this.book.isRented()).toBe(false);
  });

  it('should not have current rental', function() {
    expect(this.book.currentRental()).toBeNull();
  });

  it('should not cancel last rental', function() {
    this.book.cancelRental();
    expect(this.book.rentals.length).toEqual(0);
  });

  it('should be available', function() {
    expect(this.book.available).toBe(true);
  });

  it('should be rantable', function() {
    expect(this.book.isRentable()).toBe(true);
  });

  describe('when book is rented', function() {

    beforeEach(function() {
      this.rental = new Rental();
      this.book.rent(this.rental);
    });

    it('should not be rantable', function() {
      expect(this.book.isRentable()).toBe(false);
    });

    it('should be rented', function() {
      expect(this.book.isRented()).toBe(true);
    });

    it('should have current rental', function() {
      expect(this.book.currentRental()).toBe(this.rental);
    });

    it('should add rental to rental list', function() {
      expect(this.book.rentals.indexOf(this.rental)).not.toEqual(-1);
    });

    it('cant be rented', function() {
      var rental = new Rental();
      this.book.rent(rental);
      expect(this.book.currentRental()).not.toBe(rental);
      expect(this.book.rentals.indexOf(rental)).toEqual(-1);
    });

    describe('and then returned', function() {

      beforeEach(function() {
        this.book.return();
      });

      it('should not be rented', function() {
        expect(this.book.isRented()).toBe(false);
      });

      it('should not have current rental', function() {
        expect(this.book.currentRental()).toBeNull();
      });

      it('should cancel rental', function() {

        var rental = new Rental();

        this.book.rent(rental);
        this.book.cancelRental(this.rental);
        expect(this.book.rentals).toEqual([rental]);

      });

    });

  });

  describe('when book is not available', function() {

    beforeEach(function() {
      this.book.available = false;
    });

    it('should not be rantable', function() {
      expect(this.book.isRentable()).toBe(false);
    });

    it('and is being rented should be rented and become available', function() {
      this.rental = new Rental();
      this.book.rent(this.rental);
      expect(this.book.isRented()).toBe(true);
      expect(this.book.available).toBe(true);
    });

  });

});
