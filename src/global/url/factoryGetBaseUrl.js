export default function factoryGetBaseUrl($location) {
  'ngInject';

  function getBaseUrl() {

    var baseUrl = $location.absUrl().match(/[^#\?]*/)[0];

    if (baseUrl.slice(-1) !== '/') {
      baseUrl = baseUrl + '/';
    }

    return baseUrl;

  }

  return getBaseUrl;

}