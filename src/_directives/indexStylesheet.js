/**
 * @ngInject
 */
function indexStylesheetDirective(stylesheet) {

  function link($scope, $element, $attributes) {
    $attributes.$set('href', stylesheet.href);
  }

  return {
    link: link
  };

}

module.exports = indexStylesheetDirective;
