import templateLayout from '../templateLayout';

function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('humanLibrary', {
    url: '/',
    controller: 'LibraryController',
    controllerAs: 'vm',
    template: templateLayout
  });

}

module.exports = routerConfig;
