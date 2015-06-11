'use strict';

/**
 * @ngInject
 */
function availableHumanBookCardDirective() {

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

module.exports = availableHumanBookCardDirective;
