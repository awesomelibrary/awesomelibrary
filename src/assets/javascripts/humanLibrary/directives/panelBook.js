angular.module('humanLibrary.directives').
directive('panelBook', ['$bookCard', function ($bookCard) {
    return {
        restrict: 'C',
        link: function ($scope, $elem, $attrs) {
            // progress bar and timer 
            var Progress = (function () {
                function Progress(book) {
                    this.book = book;
                    this.percent = 0;
                    this.timer = 0;
                    this.status = '';
                    this.refresh();
                }

                Progress.prototype.refresh = function () {
                    if (null === this.book.currentRental()) {
                        this.percent = 0;
                        this.timer = 0;
                        this.status = '';
                    } else {
                        this.timer = this.book.currentRental().period + this.book.currentRental().rentedAt - (new Date()).getTime();
                        var period = Math.round(this.book.currentRental().period / 1000),
                            timer = Math.round(this.timer / 1000);
                        this.percent = (period - timer) / (period) * 100;
                        if (this.percent > 100) {
                            this.percent = 100;
                        }
                        if (timer <= 0) {
                            this.status = 'danger';
                        } else if (this.percent > 80) {
                            this.status = 'warning';
                        } else {
                            this.status = '';
                        }
                    }
                };

                return Progress;
            })();

            var refresh = function () {
                var row = Math.floor($scope.$index / $scope.capacity);
                $scope.top = (20 + $bookCard.height) * row + 20;
                $scope.left = ($scope.margin + $bookCard.width) * ($scope.$index % $scope.capacity) + $scope.margin;
            };

            refresh();

            $scope.$on('refreshBooksPositions', function (e, attrs) {
                refresh();
            });

            $scope.progress = new Progress($scope.book);

            $scope.$on('tick', function (e, attrs) {
                $scope.progress.refresh();
            });

            $scope.$watch(function () {
                return $scope.book.currentRental();
            }, function () {
                $scope.progress.refresh();
            });
        }
    };
}]);