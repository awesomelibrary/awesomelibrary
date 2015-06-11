'use strict';

/**
 * @ngInject
 */
function availableHumanBooksDirective($window, $http, $templateCache, $compile) {

  function link($scope, $element, $attributes) {

    $element.on('click', function() {

      var availableHumanBooksWindow = $window.open('about:blank', '', 'menubar=no,status=no');

      $http
        .get($attributes.availableHumanBooks, {
          cache: $templateCache
        })
        .success(function(html) {

          var availableHumanBooksDocument = availableHumanBooksWindow.document;

          angular.element(availableHumanBooksWindow).ready(function() {
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

module.exports = availableHumanBooksDirective;
