'use strict';

/**
 * @ngInject
 */
function routerConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('humanLibrary', {
    url: '/',
    controller: 'LibraryCtrl',
    controllerAs: 'vm',
    templateUrl: 'humanLibrary/_templates/layout.html'
  });

}

module.exports = routerConfig;
