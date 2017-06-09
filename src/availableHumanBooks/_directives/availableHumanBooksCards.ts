export const availableHumanBooksCardsDirective = ['$window', 'Arranger', 'compareAvailableHumanBooks', '$rootScope', function ($window, Arranger, compareAvailableHumanBooks, $rootScope) {

  function Controller() {}

  function link($scope, $element, $attributes, availableHumanBooksCardsController) {

    availableHumanBooksCardsController.arranger = new Arranger({
      compare: compareAvailableHumanBooks,
      elementHeight: 130,
      elementWidth: 250,
      gutter: 10
    });

    function setArrangerContainerWidth() {
      var width = $element[0].clientWidth;
      if (width === 0) {
        return;
      }
      availableHumanBooksCardsController.arranger.setContainerWidth($element[0].clientWidth);
    }

    $window.angular.element($scope.availableHumanBooksWindow).on('resize', setArrangerContainerWidth);
    $scope.$watch(() => $element[0].clientWidth, setArrangerContainerWidth);

    $rootScope.$on('libraryController.humanBookStateChanged', () => {
      availableHumanBooksCardsController.arranger.arrange();
    });

  }

  return {
    restrict: 'E',
    require: 'availableHumanBooksCards',
    link: link,
    controller: Controller
  };

}];
