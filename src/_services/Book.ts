export function BookServiceFactory($window) {
  'ngInject';

  function Book() {
    this.rentals = [];
    this.name = '';
    this.available = true;
  }

  Book.prototype.rent = function(rental) {
    if (this.isRented()) {
      return;
    }
    this.rentals.unshift(rental);
    this.available = true;
  };

  Book.prototype.cancelRental = function(rental) {
    var index = this.rentals.indexOf(rental);
    if (index !== -1) {
      this.rentals.splice(index, 1);
    }
    return index;
  };

  Book.prototype.return = function() {

    if (!this.isRented()) {
      return;
    }

    return this.currentRental().end();
  };

  Book.prototype.isRented = function() {
    if ($window.angular.isUndefined(this.rentals[0])) {
      return false;
    }
    return !this.rentals[0].isEnded();
  };

  Book.prototype.currentRental = function() {
    if (!this.isRented()) {
      return null;
    }
    return this.rentals[0];
  };

  Book.prototype.isRentable = function() {
    return !this.isRented() && this.available;
  };

  return Book;

}
