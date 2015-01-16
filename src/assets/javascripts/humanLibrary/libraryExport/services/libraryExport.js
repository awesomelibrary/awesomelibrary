'use strict';

/**
 * @param $window
 * @returns {libraryExportService}
 * @ngInject
 */
function libraryExportServiceFactory($window) {

  var libraryBlob;

  function libraryExportService(library) {
    if ($window.angular.isDefined(libraryBlob)) {
      $window.URL.revokeObjectURL(libraryBlob);
    }
    libraryBlob = new $window.Blob([$window.angular.toJson(library)], {
      type: 'text/json'
    });
    return $window.URL.createObjectURL(libraryBlob);
  }

  return libraryExportService;

}

module.exports = libraryExportServiceFactory;
