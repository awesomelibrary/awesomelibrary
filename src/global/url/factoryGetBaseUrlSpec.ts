import angular from 'angular';
import { humanLibraryModule } from '../../';

describe('factoryGetBaseUrl', function () {

  it('should get base URL', function () {

    angular.mock.module(humanLibraryModule);
    angular.mock.inject((getBaseUrl, $location) => {
      this.getBaseUrl = getBaseUrl;
      this.$location = $location;
    });
    spyOn(this.$location, 'protocol');
    spyOn(this.$location, 'host');
    spyOn(this.$location, 'port');
    this.$location.protocol.and.returnValue('http');
    this.$location.host.and.returnValue('some.exampledomain.com');
    this.$location.port.and.returnValue('80');
    expect(this.getBaseUrl()).toEqual('http://some.exampledomain.com:80/');
  });

});
