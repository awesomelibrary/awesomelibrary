angular.module('humanLibrary.directives').
directive('booksContainer', ['$window', '$bookCard', function ($window, $bookCard) {
    return {
        restrict: 'C',
        link: function ($scope, $elem, $attrs) {

            var refresh = function () {
                var width = $elem.width();
                $scope.capacity = Math.floor(width / $bookCard.width);
                $scope.margin = (width % $bookCard.width) / ($scope.capacity + 1);
                $scope.$broadcast('refreshBooksPositions');
            };

            refresh();

            angular.element($window).bind('resize', function () {
                refresh();
            });

            $scope.$watch('library.books.length', function (newValue, oldValue) {
                $scope.$broadcast('refreshBooksPositions');
            });
        }
    };}]);