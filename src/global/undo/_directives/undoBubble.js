'use strict';

/**
 * @ngInject
 */
function undoBubbleDirective($animate) {

  /**
   * @ngInject
   */
  function Controller(undo) {
    var vm = this;
    vm.bubble = undo.bubble;
  }

  function link($scope, $element) {
    $scope.$watch('vm.bubble.hidden', function(hidden) {
      $animate[hidden ? 'removeClass' : 'addClass']($element, 'undo-bubble--visible');
    });
  }

  return {
    restrict: 'E',
    scope: {},
    controller: Controller,
    link: link,
    controllerAs: 'vm',
    templateUrl: '/global/undo/_templates/undoBubbleDirective.html'
  };

}

module.exports = undoBubbleDirective;
