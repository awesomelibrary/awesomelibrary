'use strict';

/**
 * @param $scope
 * @param libraryExport
 * @constructor
 * @ngInject
 */
function LibraryExportCtrl($scope, libraryExport) {

  $scope.$watch('vm.library', function(library) {
    $scope.libraryExportUrl = libraryExport(library);
  }, true);

}

module.exports = LibraryExportCtrl;
