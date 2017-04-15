export function availableHumanBookCardDirective() {
  'ngInject';

  function link($scope, $element, $attributes, availableHumanBooksCardsController) {

    $element.on('$destroy', function() {
      availableHumanBooksCardsController.arranger.unregisterElement($element);
    });

    availableHumanBooksCardsController.arranger.registerElement($element, $scope.humanBook);

  }

  return {
    require: '^availableHumanBooksCards',
    restrict: 'E',
    link: link
  };

}
