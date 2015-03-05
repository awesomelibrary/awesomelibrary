'use strict';

/**
 * @ngInject
 */
function hlFileInputDirective() {

  function link($scope, $element, $attributes, hlFileInputWrapperCtrl) {
    hlFileInputWrapperCtrl.fileInputElement = $element;
  }

  return {
    link: link,
    require: '^hlFileInputWrapper'
  };

}

module.exports = hlFileInputDirective;
