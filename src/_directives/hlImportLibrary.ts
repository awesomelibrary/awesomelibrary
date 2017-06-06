export const hlImportLibraryDirective = ['librarySerializer', '$window', function(librarySerializer, $window) {

  function link($scope, $element, $attributes, hlFileInputWrapperCtrl) {

    hlFileInputWrapperCtrl.fileInputElement.on('change', function(changeEvent) {

      const file = changeEvent.target.files[0];
      const fileReader = new $window.FileReader();

      fileReader.onload = function(loadEvent) {
        $scope.setLibrary({ importedLibrary: librarySerializer.deserialize(loadEvent.target.result) });
      };

      fileReader.readAsText(file);

      hlFileInputWrapperCtrl.fileInputElement.val(null);
    });

  }

  return {
    link,
    require: 'hlFileInputWrapper',
    scope: {
      setLibrary: '&hlImportLibrary'
    }
  };

}];
