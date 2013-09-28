angular.module('humanLibrary.controllers', []).
  controller('LibraryCtrl', ['$scope', '$timeout', '$library', function($scope, $timeout, $library) {

    $scope.library = new $library();

    if ((typeof Storage !== "undefined" && Storage !== null) && localStorage.library) {
      //$scope.library = angular.fromJson(localStorage.library);
    }

    $scope.overlay = {
      visible: false,
      data: ''
    };

    $scope.save = function() {
      if (typeof Storage !== "undefined" && Storage !== null) {
        return localStorage.library = angular.toJson($scope.library);
      }
    };

    $scope["import"] = function() {
      $scope.library = angular.fromJson($scope.overlay.data);
      bootstrap();
      $scope.overlay.visible = false;
      return $scope.save();
    };

//    $scope.addBook = function() {
//      $scope.library.books.push({
//        id: $scope.library.nextId,
//        nextId: 0,
//        name: '',
//        status: 'available',
//        niceStatus: '',
//        period: 30,
//        rentals: [],
//        style: '',
//        bar: {
//          progress: 100,
//          color: '#00ff00'
//        }
//      });
//      $scope.library.nextId += 1;
//      return $scope.save();
//    };

    $scope.toggleStatus = function(id, status) {
      var bookIndex;
      bookIndex = $scope.indexOfBookWithId(id);
      if ($scope.library.books[bookIndex].status === status) {
        $scope.library.books[bookIndex].status = 'available';
      } else {
        $scope.library.books[bookIndex].status = status;
      }
      return $scope.save();
    };

    $scope.removeRental = function(bookId, rentalId) {
      var bookIndex, rentalIndex;
      bookIndex = $scope.indexOfBookWithId(bookId);
      rentalIndex = $scope.indexOfRentalWithId(bookIndex, rentalId);
      if (rentalIndex === 0 && $scope.library.books[bookIndex].status === 'rented') {
        $scope.returnBook(bookId);
      }
      $scope.library.books[bookIndex].rentals.splice(rentalIndex, 1);
      return $scope.save();
    };

    var indexById = function(array, id) {
      var entry, i, _i, _len;
      for (i = _i = 0, _len = array.length; _i < _len; i = ++_i) {
        entry = array[i];
        if (entry.id === id) {
          return i;
        }
      }
    };

    $scope.indexOfRentalWithId = function(index, id) {
      return indexById($scope.library.books[index].rentals, id);
    };
  }]);

