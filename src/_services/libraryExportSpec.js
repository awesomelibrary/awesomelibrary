'use strict';

var angular = require('angular');
require('angular-mocks');

describe("service libraryExport", function() {

  var libraryExport;

  beforeEach(function() {

    angular.mock.module(require('../'));
    angular.mock.inject(['$injector',
      function($injector) {
        libraryExport = $injector.get('libraryExport');
      }
    ]);

  });

  it('should be injectable', function() {

  });

});
