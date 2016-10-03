/**
 * @ngInject
 */
function routerConfig($stateProvider) {

  $stateProvider.state('humanLibrary.humanBook', {
    url: 'human-book/:bookId',
    controller: 'BookController',
    controllerAs: 'vm',
    templateUrl: '/humanBooks/humanBook/_templates/humanBook.html'
  });

}

module.exports = routerConfig;
