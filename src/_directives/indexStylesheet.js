function indexStylesheetDirective(stylesheet, getBaseUrl) {
  'ngInject';

  function link($scope, $element, $attributes) {
    $attributes.$set('href', getBaseUrl() + stylesheet.href);
  }

  return {
    link: link
  };

}

module.exports = indexStylesheetDirective;
