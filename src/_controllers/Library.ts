export function LibraryController($window, $scope, $timeout, $rootScope, libraryLocalStorage, libraryExport, Rental, Book, Library, undo, readersMonitorWindow, getBaseUrl) {
  'ngInject';

  var Ticker;

  $scope.library = libraryLocalStorage.load();

  if ($window.angular.isUndefined($scope.library)) {
    $scope.library = new Library();
    libraryLocalStorage.save($scope.library);
    newEditionStartedEvent();
  }

  $scope.$watch('library', function(newLibrary) {
    libraryLocalStorage.save(newLibrary);
    $scope.libraryExportUrl = libraryExport(newLibrary);
  }, true);

  $scope.rentBook = function(book) {
    var rental = new Rental();
    book.rent(rental);
    $scope.unavailableHumanBooksArranger.arrange();
    $window.ga('send', 'event', 'Human Book', 'Rented', book.title);
    undo.done('manageBooks.actions.rented', function() {
      book.cancelRental(rental);
    });
  };

  $scope.returnHumanBook = function(book) {
    var rental = book.return();
    $window.ga('send', 'event', 'Human Book', 'Returned', book.title);
    undo.done('manageBooks.actions.returned', function() {
      rental.reopen();
    });
  };

  $scope.admitBook = function() {
    $scope.library.admitBook(new Book());
    $window.ga('send', 'event', 'Human Library', 'Added Human Book');
  };

  $scope.newEdition = function() {
    var oldLibrary = $scope.library;
    $scope.library = new Library();
    newEditionStartedEvent();
    undo.done('mainMenu.newEditionStarted', function() {
      $scope.library = oldLibrary;
    });
  };

  $scope.toggleHumanBookAvailable = function(book) {
    book.available = !book.available;
    $window.ga('send', 'event', 'Human Book', 'Abailable toggle', book.title);
    undo.bubble.dismiss();
  };

  $scope.onlyAvailable = function(humanBook) {
    return humanBook.isRentable();
  };

  $scope.setNewLibrary = function (newLibrary) {
    var oldLibrary = $scope.library;
    $scope.library = newLibrary;
    undo.done('mainMenu.humanLibraryRecovered', function() {
      $scope.library = oldLibrary;
    });
  };

  // Ticker
  Ticker = (function() {

    function Ticker() {
      this.start();
    }

    Ticker.prototype.start = function() {
      var that = this;
      $scope.$broadcast('tick');
      this.timeoutId = $timeout(function() {
        that.start();
      }, 1000);
    };

    return Ticker;

  })();

  new Ticker();

  this.toggleReadersMonitorWindow = function () {
    readersMonitorWindow.toggle($scope);
  };

  $rootScope.baseUrl = getBaseUrl();

  function newEditionStartedEvent() {
    $window.ga('send', 'event', 'Human Library', 'New edition started');
  }

}
