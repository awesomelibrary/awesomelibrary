import directiveAvailableHumanBooksTemplate from './directiveAvailableHumanBooksTemplate.html';

export function directiveAvailableHumanBooks() {
  'ngInject';

  return {
    restrict: 'E',
    template: directiveAvailableHumanBooksTemplate
  };

}
