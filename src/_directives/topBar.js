import templateDirectiveTopBar from '../templateDirectiveTopBar';

function topBarDirective() {
  'ngInject';

  return {
    restrict: 'E',
    template: templateDirectiveTopBar,
    transclude: true
  };

}

module.exports = topBarDirective;
