angular.module('humanLibrary.controllers').
controller('LibraryCtrl', ['$scope', '$timeout', 'libraryLocalStorage', 'rental', 'book', function ($scope, $timeout, libraryLocalStorage, Rental, Book) {

    $scope.library = libraryLocalStorage.load();

    $scope.$watch('library', function (newLibrary) {
        libraryLocalStorage.save(newLibrary);
    }, true);

    $scope.rentBook = function (book) {
        book.rent(new Rental());
    };

    $scope.admitBook = function () {
        $scope.library.admitBook(new Book());
    };

    // Ticker
    var Ticker = (function () {

        function Ticker() {
            this.start();
        }

        Ticker.prototype.start = function () {
            $scope.$broadcast('tick');
            that = this;
            this.timeoutId = $timeout(function () {
                that.start();
            }, 1000);
        };

        return Ticker;

    })();

    var ticker = new Ticker();

    if ((typeof Storage !== "undefined" && Storage !== null) && localStorage.library) {
        //$scope.library = angular.fromJson(localStorage.library);
    }

    $scope.overlay = {
        visible: false,
        data: ''
    };

    $scope.save = function () {
        if (typeof Storage !== "undefined" && Storage !== null) {
            localStorage.library = angular.toJson($scope.library);
        }
    };

    $scope["import"] = function () {
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
    $scope.indexOfRentalWithId = function (index, id) {
        return indexById($scope.library.books[index].rentals, id);
    };
}]);