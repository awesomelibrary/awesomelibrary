export function hlFileInputDirective() {

  function link($scope, $element, $attributes, hlFileInputWrapperCtrl) {
    hlFileInputWrapperCtrl.fileInputElement = $element;
  }

  return {
    link,
    require: '^hlFileInputWrapper'
  };

}
