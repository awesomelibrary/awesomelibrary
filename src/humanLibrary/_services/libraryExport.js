'use strict';

/**
 * @param $window
 * @param librarySerializer
 * @returns {libraryExportService}
 * @ngInject
 */
function libraryExportServiceFactory($window, librarySerializer) {

  var libraryBlob;

  function libraryExportService(library) {
    if ($window.angular.isDefined(libraryBlob)) {
      $window.URL.revokeObjectURL(libraryBlob);
    }
    libraryBlob = new $window.Blob([librarySerializer.serialize(library)], {
      type: 'text/json'
    });
    return $window.URL.createObjectURL(libraryBlob);
  }

  return libraryExportService;

}

module.exports = libraryExportServiceFactory;
