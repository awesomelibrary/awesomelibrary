@LibraryCtrl = ($scope, $timeout) ->

  bootstrap = ->
    $scope.library = {} unless $scope.library?
    $scope.library.books = [] unless $scope.library.books?
    $scope.library.nextId = 0 unless $scope.library.nextId?
    $scope.library.filters = {} unless $scope.library.filters?
    $scope.library.filters.showAvailable = true unless $scope.library.filters.showAvailable?
    $scope.library.filters.showRented = true unless $scope.library.filters.showRented?
    $scope.library.filters.showOnBreak = true unless $scope.library.filters.showOnBreak?
    $scope.library.filters.showAbsent = true unless $scope.library.filters.showAbsent?

  #########################
  # tablica z książkami w bibliotece
  if Storage? and localStorage.library
    $scope.library = angular.fromJson(localStorage.library)
  bootstrap()
  $scope.overlay =
    visible: false
    data: ''
  
  #########################
  # zapis do local storage
  $scope.save = ->
    localStorage.library = angular.toJson($scope.library) if Storage?
    
  #########################
  # import
  $scope.import = ->
    $scope.library = angular.fromJson($scope.overlay.data)
    bootstrap()
    $scope.overlay.visible = false
    $scope.save()

  #########################
  # usuń książkę o podanym indeksie z tablicy
  $scope.removeBook = (id) ->
    $scope.library.books.splice($scope.indexOfBookWithId(id), 1)
    $scope.save()

  #########################
  # dodaj nową książkę na początku tablicy
  $scope.addBook = () ->
    $scope.library.books.push
      id: $scope.library.nextId
      nextId: 0
      name: ''
      status: 'available'
      niceStatus: ''
      period: 30
      rentals: []
      style: ''
      bar:
        progress: 100,
        color: '#00ff00',
    $scope.library.nextId += 1
    $scope.save()
  
  #########################
  # przełącz status
  $scope.toggleStatus = (id, status) ->
    bookIndex = $scope.indexOfBookWithId(id)
    if $scope.library.books[bookIndex].status == status
      $scope.library.books[bookIndex].status = 'available'
    else
      $scope.library.books[bookIndex].status = status
    $scope.save()
    
  #########################
  # usuń onformację o wypożyczeniu o podanym indeksie (książki i wypożyczenia)
  $scope.removeRental = (bookId, rentalId) ->
    bookIndex = $scope.indexOfBookWithId(bookId)
    rentalIndex = $scope.indexOfRentalWithId(bookIndex, rentalId)
    if rentalIndex == 0 and $scope.library.books[bookIndex].status == 'rented'
      $scope.returnBook bookId
    $scope.library.books[bookIndex].rentals.splice rentalIndex, 1
    $scope.save()
    
  
  #########################
  # ID NA INDEKSY
  # funkcja pomocnicza
  indexById = (array, id) ->
    for entry, i in array
      return i if entry.id == id
  # książki
  $scope.indexOfBookWithId = (id) ->
    indexById($scope.library.books, id)
  # wypożyczenia
  $scope.indexOfRentalWithId = (index, id) ->
    indexById($scope.library.books[index].rentals, id)
    
LibraryCtrl.$inject = ['$scope', '$timeout']