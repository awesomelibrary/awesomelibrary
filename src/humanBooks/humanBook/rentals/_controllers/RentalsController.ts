export function RentalsController($scope, $window) {
  'ngInject';

  var vm = this;

  vm.cancel = function(rental) {
    $scope.book.cancelRental(rental);
    $window.ga('send', 'event', 'Human Book', 'Cancelled rental', $scope.book.title);
  };

}
