export const factoryGetBaseUrl = ['$location', function ($location) {

  function getBaseUrl() {

    return `${$location.protocol()}://${$location.host()}:${$location.port()}/`;

  }

  return getBaseUrl;

}];
