export const libraryExportServiceFactory = ['$window', 'librarySerializer', function($window, librarySerializer) {

  let libraryBlob;

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

}];
