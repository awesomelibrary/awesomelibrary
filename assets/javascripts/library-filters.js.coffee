libraryModule.filter 'status', ->
  (input, filters) ->
    output = []
    for book in input
      output.push(book) if (filters.showAvailable and book.status == 'available') or (filters.showRented and book.status == 'rented') or (filters.showOnBreak and book.status == 'break') or (filters.showAbsent and book.status == 'absent')
    output
