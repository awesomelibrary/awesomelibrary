angular.module('humanLibrary.libraryExport')
    .controller('LibraryExportCtrl', ['$scope', 'libraryExport',
        function($scope, libraryExport) {

            $scope.$watch('library', function(library) {
                $scope.libraryExportUrl = libraryExport(library);
            }, true);

        }
    ]);
