export function hlImportLibraryDirective(librarySerializer, $window, undo) {
  'ngInject';

  function link($scope, $element, $attributes, hlFileInputWrapperCtrl) {

    hlFileInputWrapperCtrl.fileInputElement.on('change', function(changeEvent) {

      var file = changeEvent.target.files[0];
      var fileReader = new $window.FileReader();

      fileReader.onload = function(loadEvent) {

        $scope.$apply(function() {
          var oldLibrary = $scope.library;
          $scope.library = librarySerializer.deserialize(loadEvent.target.result);
          undo.done('mainMenu.humanLibraryRecovered', function() {
            $scope.library = oldLibrary;
          });
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
