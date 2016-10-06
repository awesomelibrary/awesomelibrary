import directiveAvailableHumanBooksTemplate from './directiveAvailableHumanBooksTemplate';

export default function directiveAvailableHumanBooks() {
  'ngInject';

  return {
    restrict: 'E',
    template: directiveAvailableHumanBooksTemplate
  };

}