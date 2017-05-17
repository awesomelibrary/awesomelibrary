export const indexStylesheetDirective = ['stylesheet', 'getBaseUrl', function (stylesheet, getBaseUrl) {

  function link($scope, $element, $attributes) {
    $attributes.$set('href', getBaseUrl() + stylesheet.href);
  }

  return {
    link: link
  };

}];
