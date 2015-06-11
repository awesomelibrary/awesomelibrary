'use strict';

/**
 * @ngInject
 */
function topBarDirective() {

  return {
    restrict: 'E',
    templateUrl: '/_templates/topBar.html',
    transclude: true
  };

}

module.exports = topBarDirective;
