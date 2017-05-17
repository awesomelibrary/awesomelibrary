export const hlImportLibraryDirective = ['librarySerializer', '$window', function (librarySerializer, $window) {

  function link($scope, $element, $attributes, hlFileInputWrapperCtrl) {

    hlFileInputWrapperCtrl.fileInputElement.on('change', function(changeEvent) {

      var file = changeEvent.target.files[0];
      var fileReader = new $window.FileReader();

      fileReader.onload = function(loadEvent) {
        $scope.setLibrary({ importedLibrary: librarySerializer.deserialize(loadEvent.target.result) });
      };

      fileReader.readAsText(file);

      hlFileInputWrapperCtrl.fileInputElement.val(null);
    });

  }

  return {
    link: link,
    require: 'hlFileInputWrapper',
    scope: {
      setLibrary: '&hlImportLibrary'
    }
  };

}];
