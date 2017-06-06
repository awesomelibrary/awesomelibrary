import templateDirectiveHlFileInputWrapper from '../templateDirectiveHlFileInputWrapper';

export function hlFileInputWrapperDirective() {

  function Controller() {}

  function link($scope, $element, $attributes, hlFileInputWrapperCtrl) {
    $element.on('click', function() {
      hlFileInputWrapperCtrl.fileInputElement[0].click();
    });
  }

  return {
    controller: Controller,
    link,
    transclude: true,
    template: templateDirectiveHlFileInputWrapper
  };

}
