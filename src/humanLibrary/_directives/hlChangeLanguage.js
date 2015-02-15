'use strict';

/**
 * @ngInject
 */
function hlChangeLanguageDirective() {

  /**
   * @constructor
   * @ngInject
   */
  function Controller($scope, $translate) {

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
    templateUrl: 'humanLibrary/_templates/hlChangeLanguage.html',
    scope: true
  };

}

module.exports = hlChangeLanguageDirective;