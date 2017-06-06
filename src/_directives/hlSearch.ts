export const hlSearchDirective = ['$document', ($document) => {

  function link($scope, $element) {

    $document.on('keydown', (e) => {
      $scope.$apply(() => {
        if (e.target.nodeName === 'INPUT') {
          return;
        }
        if (e.keyCode === 27) {
          $scope.onEsc();
          return;
        }
        $element[0].focus();
      });
    });

    $element.on('keydown', (e) => {
      $scope.$apply(() => {
        if (e.keyCode !== 27) {
          return;
        }
        $scope.onEsc();
      });
    });

  }

  return {
    link,
    scope: {
      onEsc: '&hlSearchOnEsc'
    }
  };

}];
