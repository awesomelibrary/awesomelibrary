import templateDirectiveHlChangeLanguage from '../templateDirectiveHlChangeLanguage';

function hlChangeLanguageDirective() {
  'ngInject';

  function Controller($scope, $translate) {
    'ngInject';

    var vm = this;

    vm.language = $translate.use();

    $scope.$watch('vm.language', function(newLanguage) {
      $translate.use(newLanguage);
    });

  }

  return {
    restrict: 'E',
    controller: Controller,
    controllerAs: 'vm',
    template: templateDirectiveHlChangeLanguage,
    scope: true
  };

}

module.exports = hlChangeLanguageDirective;
