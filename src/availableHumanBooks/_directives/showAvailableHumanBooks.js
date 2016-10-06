import templateAvailableHumanBooks from '../../templateAvailableHumanBooks';

function showAvailableHumanBooksDirective($window, $compile) {
  'ngInject';

  function link($scope, $element, $attributes) {

    $element.on('click', function () {

      var availableHumanBooksDocument;

      $scope.availableHumanBooksWindow = $window.open('about:blank', '', 'menubar=no,status=no');

      availableHumanBooksDocument = $scope.availableHumanBooksWindow.document;

      $window.angular.element($scope.availableHumanBooksWindow).ready(function () {
        $compile(availableHumanBooksDocument.documentElement)($scope);
      });

      availableHumanBooksDocument.open();
      availableHumanBooksDocument.write(templateAvailableHumanBooks);
      availableHumanBooksDocument.close();

    });

  }

  return {
    link: link
  };

}

module.exports = showAvailableHumanBooksDirective;
