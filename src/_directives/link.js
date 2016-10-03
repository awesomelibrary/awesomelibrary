/**
 * @ngInject
 */
function linkDirective($window, stylesheet) {

  function link($scope, $element, $attributes) {
    if ($attributes.rel !== 'stylesheet' || $window.angular.isUndefined($attributes.href)) return;
    stylesheet.href = $attributes.href;
  }

  return {
    link: link
  };

}

module.exports = linkDirective;
