import templateDirectiveHumanBookCard from '../templateDirectiveHumanBookCard';

function humanBookCardDirective() {
  'ngInject';

  function link($scope, $element, $attributes, humanBooksCardsController) {

    $element.on('$destroy', function() {
      humanBooksCardsController.availableHumanBooksArranger.unregisterElement($element);
      humanBooksCardsController.unavailableHumanBooksArranger.unregisterElement($element);
    });

    $scope.$watch('book.isRentable()', function(isRentable) {
      if (isRentable) {
        humanBooksCardsController.unavailableHumanBooksArranger.unregisterElement($element);
        humanBooksCardsController.availableHumanBooksArranger.registerElement($element, $scope.book);
        return;
      }
      humanBooksCardsController.availableHumanBooksArranger.unregisterElement($element);
      humanBooksCardsController.unavailableHumanBooksArranger.registerElement($element, $scope.book);
    });

  }

  return {
    require: '^humanBooksCards',
    restrict: 'E',
    link: link,
    template: templateDirectiveHumanBookCard
  };

}

module.exports = humanBookCardDirective;
