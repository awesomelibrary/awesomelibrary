import templateDirectiveTopBar from '../templateDirectiveTopBar.html';

export function topBarDirective() {

  return {
    restrict: 'E',
    template: templateDirectiveTopBar,
    transclude: true
  };

}
