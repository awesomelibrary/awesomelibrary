'use strict';

/**
 * @param $window
 * @param $bookCard
 * @returns {{restrict: string, link: link}}
 * @ngInject
 */
function booksContainerDirective($window, $bookCard) {

  function link($scope, $element) {

    var refresh = function() {
      var width = $element.width();
      $scope.capacity = Math.floor(width / $bookCard.width);
      $scope.margin = (width % $bookCard.width) / ($scope.capacity + 1);
      $scope.$broadcast('refreshBooksPositions');
    };

    refresh();

    angular.element($window).bind('resize', function() {
      refresh();
    });

    $scope.$watch('library.books.length', function() {
      $scope.$broadcast('refreshBooksPositions');
    });
  }

  return {
    restrict: 'C',
    link: link
  };

}

module.exports = booksContainerDirective;
