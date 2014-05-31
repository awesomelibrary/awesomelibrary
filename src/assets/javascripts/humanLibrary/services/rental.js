angular.module('humanLibrary.services').
factory('rental', [function () {

    var Rental = function (period) {
        this.period = angular.isDefined(period) ? period : this.PERIOD;
        this.rentedAt = (new Date()).getTime();
        this.returnedAt = null;
    };

    //    Rental.prototype.PERIOD = 1800000;
    Rental.prototype.PERIOD = 18000;

    Rental.prototype.end = function () {
        if (null === this.returnedAt) {
            this.returnedAt = (new Date()).getTime();
        }
    };

    Rental.prototype.reopen = function () {
        this.returnedAt = null;
    };

    Rental.prototype.isEnded = function () {
        return this.returnedAt !== null;
    };

    return Rental;

}]);