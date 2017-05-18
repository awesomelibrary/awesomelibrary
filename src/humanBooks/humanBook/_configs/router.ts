import templateHumanBook from '../templateHumanBook';

export const routerConfig = ['$stateProvider', function($stateProvider) {

  $stateProvider.state('humanLibrary.humanBook', {
    url: 'human-book/:bookId',
    controller: 'BookController',
    controllerAs: 'vm',
    template: templateHumanBook
  });

}];
