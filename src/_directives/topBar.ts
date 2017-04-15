import templateDirectiveTopBar from '../templateDirectiveTopBar.html';

export function topBarDirective() {
  'ngInject';

  return {
    restrict: 'E',
    template: templateDirectiveTopBar,
    transclude: true
  };

}
