'use strict';

/**
 * @ngInject
 */
function humanBooksCardsDirective($window) {

  /**
   * @ngInject
   */
  function Controller(Arranger, compareAvailableHumanBooks, compareUnavailableHumanBooks) {

    var availableHeight = 0;
    var unavailableHeight = 0;
    var height;
    var that = this;
    var elementHeight = 250;
    var elementWidth = 170;
    var gutter = 16;

    function checkHeight() {
      var newHeight = Math.max(availableHeight, unavailableHeight);
      if (height === newHeight) return;
      height = newHeight;
      if (angular.isUndefined(that.heightCallback)) return;
      that.heightCallback(height);
    }

    this.availableHumanBooksArranger = new Arranger({
      heightCallback: function(newAvailableHeight) {
        availableHeight = newAvailableHeight;
        checkHeight();
      },
      compare: compareAvailableHumanBooks,
      elementHeight: elementHeight,
      elementWidth: elementWidth,
      gutter: gutter
    });

    this.unavailableHumanBooksArranger = new Arranger({
      heightCallback: function(newUnavailableHeight) {
        unavailableHeight = newUnavailableHeight;
        checkHeight();
      },
      compare: compareUnavailableHumanBooks,
      elementHeight: elementHeight,
      elementWidth: elementWidth,
      gutter: gutter
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
