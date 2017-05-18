export const RentalsController = ['$scope', '$window', function($scope, $window) {

  var vm = this;

  vm.cancel = function(rental) {
    $scope.book.cancelRental(rental);
    $window.ga('send', 'event', 'Human Book', 'Cancelled rental', $scope.book.title);
  };

}];
