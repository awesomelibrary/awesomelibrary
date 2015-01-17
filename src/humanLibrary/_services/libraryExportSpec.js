describe("service libraryExport", function() {

  var libraryExport;

  beforeEach(function() {

    angular.mock.module('humanLibrary');
    angular.mock.inject(['$injector', function($injector) {
      libraryExport = $injector.get('libraryExport');
    }]);

  });

  it('should be injectable', function() {

  });

});
