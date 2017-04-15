export function factoryGetBaseUrl($location) {
  'ngInject';

  function getBaseUrl() {

    return `${$location.protocol()}://${$location.host()}:${$location.port()}/`;

  }

  return getBaseUrl;

}
