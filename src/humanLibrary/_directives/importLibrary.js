'use strict';

/**
 * @ngInject
 */
function importLibraryDirective(librarySerializer) {

  function link($scope, $element) {
    $element.on('change', function(changeEvent) {

      var file = changeEvent.target.files[0];
      var fileReader = new FileReader();

      fileReader.onload = function(loadEvent) {

        $scope.$apply(function() {
          $scope.library = librarySerializer.deserialize(loadEvent.target.result);
        });

      };

      fileReader.readAsText(file);

      $element.val(null);
    });
  }

  return {
    link: link,
    scope: {
      library: '=importLibrary'
    }
  };

}

module.exports = importLibraryDirective;
