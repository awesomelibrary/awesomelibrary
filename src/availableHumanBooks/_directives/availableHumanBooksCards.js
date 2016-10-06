function availableHumanBooksCardsDirective($window, Arranger, compareAvailableHumanBooks) {
  'ngInject';

  function Controller() {
    'ngInject';
  }

  function link($scope, $element, $attributes, availableHumanBooksCardsController) {

    availableHumanBooksCardsController.arranger = new Arranger({
      compare: compareAvailableHumanBooks,
      elementHeight: 130,
      elementWidth: 250,
      gutter: 10
    });

    function setArrangerContainerWidth() {
      availableHumanBooksCardsController.arranger.setContainerWidth($element[0].clientWidth);
    }

    setArrangerContainerWidth();

    $window.angular.element($scope.availableHumanBooksWindow).on('resize', function() {
      setArrangerContainerWidth();
    });

  }

  return {
    restrict: 'E',
    require: 'availableHumanBooksCards',
    link: link,
    controller: Controller
  };

}

module.exports = availableHumanBooksCardsDirective;
