'use strict';

/**
 * @ngInject
 */
function humanBooksCardsDirective($window) {

  /**
   * @ngInject
   */
  function Controller(Arranger) {

    var availableHeight = 0;
    var unavailableHeight = 0;
    var height;
    var that = this;

    function checkHeight() {
      var newHeight = Math.max(availableHeight, unavailableHeight);
      if (height === newHeight) return;
      height = newHeight;
      if (angular.isUndefined(that.heightCallback)) return;
      that.heightCallback(height);
    }

    this.availableHumanBooksArranger = new Arranger(function(newAvailableHeight) {
      availableHeight = newAvailableHeight;
      checkHeight();
    });

    this.unavailableHumanBooksArranger = new Arranger(function(newUnavailableHeight) {
      unavailableHeight = newUnavailableHeight;
      checkHeight();
    });

  }

  function link($scope, $element, $attributes, humanBooksCardsController) {

    humanBooksCardsController.heightCallback = function(height) {
      $element.css({
        height: height + 'px'
      });
    };

    function setArrangerContainerWidth() {

      var width = ($element[0].clientWidth) / 2;
      humanBooksCardsController.availableHumanBooksArranger.setContainerWidth(width);
      humanBooksCardsController.unavailableHumanBooksArranger.setContainerWidth(width, width);
    }

    setArrangerContainerWidth();

    angular.element($window).on('resize', function() {
      setArrangerContainerWidth();
    });

  }

  return {
    require: 'humanBooksCards',
    restrict: 'E',
    templateUrl: '/humanBooks/_templates/humanBooksCards.html',
    link: link,
    controller: Controller
  };

}

module.exports = humanBooksCardsDirective;
