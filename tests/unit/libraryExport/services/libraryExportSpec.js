describe("service libraryExport", function () {

    var libraryExport;

    beforeEach(function () {

        module('humanLibrary.libraryExport');
        inject(['$injector', function ($injector) {
            libraryExport = $injector.get('libraryExport');
        }]);
    
    });
    
    it('should export library', function() {
        
    });

});