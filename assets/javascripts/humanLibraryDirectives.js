angular.module('humanLibrary.directives', []).
  directive('library', ['$timeout', function ($timeout) {
    return function(scope, element, attrs) {
      
    };
  }]);
    
//    ###########################
//    # uaktualnia wszystkie statusy wypożyczone
//    updateRentedStatuses = ->
//      for book, i in scope.library.books
//        if book.status == 'rented'
//          diffrence = book.rentals[0].period * 60000 - ((new Date()).getTime() - book.rentals[0].rented)
//          if diffrence < 0
//            over = true
//            diffrence *= -1
//          else
//            over = false
//          minutess = minutes = Math.floor(diffrence/60000)
//          minutess = "0#{minutes}" if minutes < 10
//          secondss = seconds = Math.floor(diffrence%60000/1000)
//          secondss = "0#{seconds}" if seconds < 10
//          if over
//            book.niceStatus = "-#{minutess}:#{secondss}"
//            book.bar.progress = 100
//            book.bar.color = '#d3401e'
//          else
//            book.niceStatus = "#{minutess}:#{secondss}"
//            book.bar.progress = 100 - diffrence / (book.rentals[0].period * 600)
//            if minutes < 5
//              book.bar.color = '#d3401e'
//            else
//              book.bar.color = '#fff200'
//    updateRentedStatuses()
//    
//    everySecondId = undefined
//    everySecond = ->
//      onTimeout = ->
//        updateRentedStatuses()
//        everySecond()
//      everySecondId = $timeout(onTimeout, 1000)
//    everySecond()
//      
//
//    #########################
//    # wypożycz książkę o podanym indeksie
//    scope.rentBook = (id) ->
//      bookIndex = scope.indexOfBookWithId(id)
//      if scope.library.books[bookIndex].status == 'available'
//        scope.library.books[bookIndex].rentals.unshift
//          id: scope.library.books[bookIndex].nextId
//          rented: (new Date()).getTime(),
//          period: scope.library.books[bookIndex].period
//        scope.library.books[bookIndex].nextId += 1
//        scope.library.books[bookIndex].status = 'rented'
//        updateRentedStatuses()
//        scope.save()
//  
//    #########################
//    # zwróć książkę o podanym indeksie
//    scope.returnBook = (id) ->
//      bookIndex = scope.indexOfBookWithId(id)
//      if scope.library.books[bookIndex].status == 'rented'
//        scope.library.books[bookIndex].rentals[0].returned = (new Date()).getTime()
//        scope.library.books[bookIndex].status = 'available'
//        scope.library.books[bookIndex].niceStatus = ''
//        scope.library.books[bookIndex].bar.progress = 100
//        scope.library.books[bookIndex].bar.color = '#00ff00'
//        scope.library.books[bookIndex].period = 30
//        scope.save()
//
//    f = (newValue, oldValue) ->
//      scope.save()
//    scope.$watch 'library.filters', f, true
//
//    scope.$watch 'overlay.visible', (newValue, oldValue) ->
//      scope.save()
//      scope.overlay.data = angular.toJson(scope.library)
//
//libraryDirective.$inject = ['$timeout']
//
//libraryModule.directive 'book', ->
//  (scope, element, attrs) ->
//    scope.toggleMore = ->
//      if scope.book.style == ''
//        scope.book.style = 'height: 300px; margin-top: 10px; margin-bottom: 10px;'
//      else
//        scope.book.style = ''
//      scope.save()
//    
//    scope.$watch 'book.notes', ->
//      scope.save()
//    scope.$watch 'book.name', ->
//      scope.save()
//
//    scope.$watch 'book.break', (newValue, oldValue) ->
//      if newValue
//        scope.book.bar.color = '#e8e8e8'
//      else
//        scope.book.bar.color = '#00ff00'
//      scope.save()
//
//    scope.$watch 'book.absent', (newValue, oldValue) ->
//      if newValue
//        scope.book.bar.color = '#e8e8e8'
//      else
//        scope.book.bar.color = '#00ff00'
//      scope.save()