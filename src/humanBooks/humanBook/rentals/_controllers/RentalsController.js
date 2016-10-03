/**
 * @constructor
 * @ngInject
 */
function RentalsController($scope) {

  var vm = this;

  vm.cancel = function(rental) {
    $scope.book.cancelRental(rental);
  };

}

module.exports = RentalsController;
