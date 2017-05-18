import templateDirectiveHlChangeLanguage from '../templateDirectiveHlChangeLanguage';

export function hlChangeLanguageDirective() {

  const Controller = ['$scope', '$translate', function Controller($scope, $translate) {

    var vm = this;

    vm.language = $translate.use();

    $scope.$watch('vm.language', function(newLanguage) {
      $translate.use(newLanguage);
    });

  }];

  return {
    restrict: 'E',
    controller: Controller,
    controllerAs: 'vm',
    template: templateDirectiveHlChangeLanguage,
    scope: true
  };

}
