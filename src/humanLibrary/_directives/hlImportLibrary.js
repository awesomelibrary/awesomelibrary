'use strict';

/**
 * @ngInject
 */
function hlImportLibraryDirective(librarySerializer) {

  function link($scope, $element, $attributes, hlFileInputWrapperCtrl) {

    hlFileInputWrapperCtrl.fileInputElement.on('change', function(changeEvent) {

      var file = changeEvent.target.files[0];
      var fileReader = new FileReader();

      fileReader.onload = function(loadEvent) {

        $scope.$apply(function() {
          $scope.library = librarySerializer.deserialize(loadEvent.target.result);
        });

      };

      fileReader.readAsText(file);

      hlFileInputWrapperCtrl.fileInputElement.val(null);
    });

  }

  return {
    link: link,
    require: 'hlFileInputWrapper',
    scope: {
      library: '=hlImportLibrary'
    }
  };

}

module.exports = hlImportLibraryDirective;
