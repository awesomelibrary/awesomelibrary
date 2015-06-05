'use strict';

/**
 * @ngInject
 */
function humanBookCardDirective() {

  function link($scope, $element, $attributes, humanBooksCardsController) {

    $element.on('$destroy', function() {
      humanBooksCardsController.availableHumanBooksArranger.unregisterElement($element);
      humanBooksCardsController.unavailableHumanBooksArranger.unregisterElement($element);
    });

    $scope.$watch('book.isRented()', function(rented) {
      if (rented) {
        humanBooksCardsController.availableHumanBooksArranger.unregisterElement($element);
        humanBooksCardsController.unavailableHumanBooksArranger.registerElement($element);
        return;
      }
      humanBooksCardsController.unavailableHumanBooksArranger.unregisterElement($element);
      humanBooksCardsController.availableHumanBooksArranger.registerElement($element);
    });

  }

  return {
    require: '^humanBooksCards',
    restrict: 'E',
    link: link,
    templateUrl: '/humanBooks/_templates/humanBookCard.html'
  };

}

module.exports = humanBookCardDirective;
