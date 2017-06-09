import {Book} from '../_services/Book';

export class LibraryController {

  public static $inject: string[] = [
    '$document',
    '$window',
    '$scope',
    '$timeout',
    '$rootScope',
    'libraryLocalStorage',
    'libraryExport',
    'Rental',
    'Book',
    'Library',
    'undo',
    'readersMonitorWindow',
    'getBaseUrl',
    'searcher'
  ];

  public filteredBooks: Book[] = [];
  public query: string = '';

  constructor(
    $document,
    $window,
    private $scope,
    $timeout,
    private $rootScope,
    libraryLocalStorage,
    libraryExport,
    Rental,
    Book,
    Library,
    undo,
    private readersMonitorWindow,
    getBaseUrl,
    private searcher
  ) {

    let Ticker;

    $scope.library = libraryLocalStorage.load();

    if ($window.angular.isUndefined($scope.library)) {
      $scope.library = new Library();
      libraryLocalStorage.save($scope.library);
      newEditionStartedEvent();
    }

    $scope.$watch('vm.query', this.syncFilteredBooks.bind(this));

    $scope.$watch('library', (newLibrary) => {
      libraryLocalStorage.save(newLibrary);
      $scope.libraryExportUrl = libraryExport(newLibrary);
    }, true);

    $scope.rentBook = (book) => {
      const rental = new Rental();
      book.rent(rental);
      $scope.unavailableHumanBooksArranger.arrange();
      $window.ga('send', 'event', 'Human Book', 'Rented', book.title);
      this.$rootScope.$emit('libraryController.humanBookStateChanged');
      undo.done('manageBooks.actions.rented', () => {
        book.cancelRental(rental);
        this.$rootScope.$emit('libraryController.humanBookStateChanged');
      });
    };

    $scope.returnHumanBook = (book) => {
      const rental = book.return();
      $window.ga('send', 'event', 'Human Book', 'Returned', book.title);
      this.$rootScope.$emit('libraryController.humanBookStateChanged');
      undo.done('manageBooks.actions.returned', () => {
        rental.reopen();
        this.$rootScope.$emit('libraryController.humanBookStateChanged');
      });
    };

    $scope.admitBook = () => {
      this.clearQuery();
      $scope.library.admitBook(new Book());
      $window.ga('send', 'event', 'Human Library', 'Added Human Book');
    };

    $scope.newEdition = () => {
      const oldLibrary = $scope.library;
      $scope.library = new Library();
      this.clearQuery();
      this.syncFilteredBooks();
      newEditionStartedEvent();
      undo.done('mainMenu.newEditionStarted', () => {
        $scope.library = oldLibrary;
        this.clearQuery();
        this.syncFilteredBooks();
      });
    };

    $scope.toggleHumanBookAvailable = (book) => {
      book.toggleAvailable();
      $window.ga('send', 'event', 'Human Book', 'Available toggle', book.title);
      undo.bubble.dismiss();
    };

    $scope.onlyAvailable = (humanBook) => {
      return humanBook.available;
    };

    $scope.setNewLibrary = (newLibrary) => {
      const oldLibrary = $scope.library;
      $scope.library = newLibrary;
      this.clearQuery();
      this.syncFilteredBooks();
      undo.done('mainMenu.humanLibraryRecovered', () => {
        $scope.library = oldLibrary;
        this.clearQuery();
        this.syncFilteredBooks();
      });
    };

    // Ticker
    Ticker = (() => {

      function Ticker() {
        this.start();
      }

      Ticker.prototype.start = function() {
        const that = this;
        $scope.$broadcast('tick');
        this.timeoutId = $timeout(function() {
          that.start();
        }, 1000);
      };

      return Ticker;

    })();

    new Ticker();

    $rootScope.baseUrl = getBaseUrl();

    function newEditionStartedEvent() {
      $window.ga('send', 'event', 'Human Library', 'New edition started');
    }

  }

  public toggleReadersMonitorWindow(): void {
    this.readersMonitorWindow.toggle(this.$scope);
  }

  public syncFilteredBooks(): void {
    if (this.query === '') {
      this.filteredBooks = this.$scope.library.books;
      return;
    }
    this.filteredBooks = this.searcher.search(this.$scope.library.books, this.query);
  }

  public clearQuery() {
    this.query = '';
  }

}
