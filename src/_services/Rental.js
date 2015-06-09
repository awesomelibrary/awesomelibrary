'use strict';

/**
 * @returns {Rental}
 * @ngInject
 */
function RentalServiceFactory() {

  function Rental(period) {
    this.period = angular.isDefined(period) ? period : this.PERIOD;
    this.rentedAt = (new Date()).getTime();
    this.returnedAt = null;
  }

  Rental.prototype.PERIOD = 1800000;

  Rental.prototype.end = function() {
    if (null === this.returnedAt) {
      this.returnedAt = (new Date()).getTime();
    }
    return this;
  };

  Rental.prototype.reopen = function() {
    this.returnedAt = null;
  };

  Rental.prototype.isEnded = function() {
    return this.returnedAt !== null;
  };

  return Rental;

}

module.exports = RentalServiceFactory;
