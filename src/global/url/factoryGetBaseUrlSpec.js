import angular from 'angular';
import humanLibraryModule from '../../';

describe('factoryGetBaseUrl', function () {

  it('should get base URL', function () {
    this.$locationMock = jasmine.createSpyObj('$locationMock', ['protocol', 'host', 'port', 'url']);

    angular.mock.module(humanLibraryModule, {
      $location: this.$locationMock
    });
    angular.mock.inject(getBaseUrl => this.getBaseUrl = getBaseUrl);
    this.$locationMock.protocol.and.returnValue('http');
    this.$locationMock.host.and.returnValue('some.exampledomain.com');
    this.$locationMock.port.and.returnValue('80');
    expect(this.getBaseUrl()).toEqual('http://some.exampledomain.com:80/');
  });

});
