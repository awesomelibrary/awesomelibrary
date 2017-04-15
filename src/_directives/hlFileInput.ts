export function hlFileInputDirective() {
  'ngInject';

  function link($scope, $element, $attributes, hlFileInputWrapperCtrl) {
    hlFileInputWrapperCtrl.fileInputElement = $element;
  }

  return {
    link: link,
    require: '^hlFileInputWrapper'
  };

}
