'use strict';

/**
 * @ngInject
 */
function linkDirective(stylesheet) {

  function link($scope, $element, $attributes) {
    if ($attributes.rel !== 'stylesheet' || angular.isUndefined($attributes.href)) return;
    stylesheet.href = $attributes.href;
  }

  return {
    link: link
  };

}

module.exports = linkDirective;
