import templateDirectiveUndoBubble from '../_templates/directiveUndoBubble.html';

export const undoBubbleDirective = ['$animate', function ($animate) {

  const Controller = ['undo', function (undo) {
    var vm = this;
    vm.bubble = undo.bubble;
  }];

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
    template: templateDirectiveUndoBubble
  };

}];
