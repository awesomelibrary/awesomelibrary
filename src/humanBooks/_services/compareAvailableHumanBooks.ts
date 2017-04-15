export function compareAvailableHumanBooksServiceFactory() {
  'ngInject';

  function compareAvailableHumanBooksService(a, b) {
    if (a.model.title > b.model.title) {
      return 1;
    }
    if (b.model.title > a.model.title) {
      return -1;
    }
    return 0;
  }

  return compareAvailableHumanBooksService;

}
