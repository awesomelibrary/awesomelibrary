angular.module('humanLibrary.libraryExport')
    .factory('libraryExport', ['$window',
        function($window) {

            var libraryBlob;

            return function(library) {
                if ($window.angular.isDefined(libraryBlob)) {
                    $window.URL.revokeObjectURL(libraryBlob);
                }
                libraryBlob = new $window.Blob([$window.angular.toJson(library)], {type: 'text/json'});
                return $window.URL.createObjectURL(libraryBlob);
            };

        }
    ]);