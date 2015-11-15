'use strict';

/**
 * @ngInject
 */
function showAvailableHumanBooksDirective($window, $http, $templateCache, $compile) {

  function link($scope, $element, $attributes) {

    $element.on('click', function() {

      $scope.availableHumanBooksWindow = $window.open('about:blank', '', 'menubar=no,status=no');

      $http
        .get($attributes.showAvailableHumanBooks, {
          cache: $templateCache
        })
        .success(function(html) {

          var availableHumanBooksDocument = $scope.availableHumanBooksWindow.document;

          $window.angular.element($scope.availableHumanBooksWindow).ready(function() {
            $compile(availableHumanBooksDocument)($scope);
          });

          availableHumanBooksDocument.open();
          availableHumanBooksDocument.write(html);
          availableHumanBooksDocument.close();

        });

    });

  }

  return {
    link: link
  };

}

module.exports = showAvailableHumanBooksDirective;
