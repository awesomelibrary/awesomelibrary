import templateLayout from '../_templates/layout.html';

export const routerConfig = ['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('humanLibrary', {
    url: '/',
    controller: 'LibraryController',
    controllerAs: 'vm',
    template: templateLayout
  });

}];
