angular.module('humanLibrary.directives', []).
        directive('hlBookProgress', [function() {
                return {restrict: 'A'
                    , link: function($scope, $elem, $attrs) {

                        // progress bar and timer 
                        var Progress = (function() {
                            function Progress(book) {
                                this.book = book;
                                this.percent = 0;
                                this.timer = 0;
                                this.refresh();
                            };

                            Progress.prototype.refresh = function() {
                                if (null === this.book.currentRental) {
                                    this.percent = 0;
                                    this.timer = 0;
                                } else {
                                    this.timer = 60000 * 30 + this.book.currentRental.rentedAt - (new Date()).getTime()
                                    this.percent = (60000 * 30 - this.timer) / (600 * 30);
                                }
                            };

                            return Progress;
                        })();

                        $scope.progress = new Progress($scope.book);

                        //refresh progress on tick
                        $scope.$on('tick', function(e, attrs) {
                            $scope.progress.refresh();
                        });
                        $scope.$watch('book.currentRental', function(newValue, oldValue) {
                            $scope.progress.refresh();
                        });
                    }
                };
            }]).
        directive('library', ['$timeout', function($timeout) {
                return function(scope, element, attrs) {

                    var everySecond, everySecondId, f, updateRentedStatuses;

                    updateRentedStatuses = function() {
                        var book, diffrence, i, minutes, minutess, over, seconds, secondss, _i, _len, _ref, _results;
                        _ref = scope.library.books;
                        _results = [];
                        for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
                            book = _ref[i];
                            if (book.status === 'rented') {
                                diffrence = book.rentals[0].period * 60000 - ((new Date()).getTime() - book.rentals[0].rented);
                                if (diffrence < 0) {
                                    over = true;
                                    diffrence *= -1;
                                } else {
                                    over = false;
                                }
                                minutess = minutes = Math.floor(diffrence / 60000);
                                if (minutes < 10) {
                                    minutess = "0" + minutes;
                                }
                                secondss = seconds = Math.floor(diffrence % 60000 / 1000);
                                if (seconds < 10) {
                                    secondss = "0" + seconds;
                                }
                                if (over) {
                                    book.niceStatus = "-" + minutess + ":" + secondss;
                                    book.bar.progress = 100;
                                    _results.push(book.bar.color = '#d3401e');
                                } else {
                                    book.niceStatus = "" + minutess + ":" + secondss;
                                    book.bar.progress = 100 - diffrence / (book.rentals[0].period * 600);
                                    if (minutes < 5) {
                                        _results.push(book.bar.color = '#d3401e');
                                    } else {
                                        _results.push(book.bar.color = '#fff200');
                                    }
                                }
                            } else {
                                _results.push(void 0);
                            }
                        }
                        return _results;
                    };

                    updateRentedStatuses();

                    everySecondId = void 0;

                    everySecond = function() {
                        var onTimeout;
                        onTimeout = function() {
                            updateRentedStatuses();
                            return everySecond();
                        };
                        return everySecondId = $timeout(onTimeout, 1000);
                    };

                    everySecond();

                    scope.rentBook = function(id) {
                        var bookIndex;
                        bookIndex = scope.indexOfBookWithId(id);
                        if (scope.library.books[bookIndex].status === 'available') {
                            scope.library.books[bookIndex].rentals.unshift({
                                id: scope.library.books[bookIndex].nextId,
                                rented: (new Date()).getTime(),
                                period: scope.library.books[bookIndex].period
                            });
                            scope.library.books[bookIndex].nextId += 1;
                            scope.library.books[bookIndex].status = 'rented';
                            updateRentedStatuses();
                            return scope.save();
                        }
                    };

                    scope.returnBook = function(id) {
                        var bookIndex;
                        bookIndex = scope.indexOfBookWithId(id);
                        if (scope.library.books[bookIndex].status === 'rented') {
                            scope.library.books[bookIndex].rentals[0].returned = (new Date()).getTime();
                            scope.library.books[bookIndex].status = 'available';
                            scope.library.books[bookIndex].niceStatus = '';
                            scope.library.books[bookIndex].bar.progress = 100;
                            scope.library.books[bookIndex].bar.color = '#00ff00';
                            scope.library.books[bookIndex].period = 30;
                            return scope.save();
                        }
                    };

                    f = function(newValue, oldValue) {
                        return scope.save();
                    };

                    scope.$watch('library.filters', f, true);

                    scope.$watch('overlay.visible', function(newValue, oldValue) {
                        scope.save();
                        return scope.overlay.data = angular.toJson(scope.library);
                    });

                };
            }]);