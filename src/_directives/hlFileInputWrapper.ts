import templateDirectiveHlFileInputWrapper from '../templateDirectiveHlFileInputWrapper';

export function hlFileInputWrapperDirective() {
  'ngInject';

  function Controller() {
    'ngInject';
  }

  function link($scope, $element, $attributes, hlFileInputWrapperCtrl) {
    $element.on('click', function() {
      hlFileInputWrapperCtrl.fileInputElement[0].click();
    });
  }

  return {
    controller: Controller,
    link: link,
    transclude: true,
    template: templateDirectiveHlFileInputWrapper
  };

}
