function RentalsController($scope) {
  'ngInject';

  var vm = this;

  vm.cancel = function(rental) {
    $scope.book.cancelRental(rental);
  };

}

module.exports = RentalsController;
