'use strict';

/**
 * @ngInject
 */
function hlFileInputWrapperDirective() {

  /**
   * @constructor
   * @ngInject
   */
  function Controller() {}

  function link($scope, $element, $attributes, hlFileInputWrapperCtrl) {
    $element.on('click', function() {
      hlFileInputWrapperCtrl.fileInputElement[0].click();
    });
  }

  return {
    controller: Controller,
    link: link,
    transclude: true,
    templateUrl: '_templates/hlFileInputWrapperDirective.html'
  };

}

module.exports = hlFileInputWrapperDirective;
