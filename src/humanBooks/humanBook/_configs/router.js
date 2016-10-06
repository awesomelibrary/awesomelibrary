import templateHumanBook from '../templateHumanBook';

function routerConfig($stateProvider) {
  'ngInject';

  $stateProvider.state('humanLibrary.humanBook', {
    url: 'human-book/:bookId',
    controller: 'BookController',
    controllerAs: 'vm',
    template: templateHumanBook
  });

}

module.exports = routerConfig;
