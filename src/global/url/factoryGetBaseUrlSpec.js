import angular from 'angular';
import humanLibraryModule from '../../';

describe('factoryGetBaseUrl', function () {

  beforeEach(function () {

    this.$locationMock = jasmine.createSpyObj('$locationMock', ['absUrl', 'url']);

    angular.mock.module(humanLibraryModule, {
      $location: this.$locationMock
    });
    angular.mock.inject(getBaseUrl => this.getBaseUrl = getBaseUrl);

  });

  it('should get base URL when there is no hash and no search', function () {
    this.$locationMock.absUrl.and.returnValue('http://some.exampledomain.com/');
    expect(this.getBaseUrl()).toEqual('http://some.exampledomain.com/');
  });

  it('should get base URL when there is hash', function () {
    this.$locationMock.absUrl.and.returnValue('http://some.exampledomain.com/#some-hash');
    expect(this.getBaseUrl()).toEqual('http://some.exampledomain.com/');
  });

  it('should get base URL when there is search', function () {
    this.$locationMock.absUrl.and.returnValue('http://some.exampledomain.com/?key=value');
    expect(this.getBaseUrl()).toEqual('http://some.exampledomain.com/');
  });

  it('should get base URL when there is search and hash', function () {
    this.$locationMock.absUrl.and.returnValue('http://some.exampledomain.com/?key=value#other-hash');
    expect(this.getBaseUrl()).toEqual('http://some.exampledomain.com/');
  });

  it('should get base URL with trailing /', function () {
    this.$locationMock.absUrl.and.returnValue('http://some.exampledomain.com');
    expect(this.getBaseUrl()).toEqual('http://some.exampledomain.com/');
  });

  it('should get base URL with trailing / when there is hash', function () {
    this.$locationMock.absUrl.and.returnValue('http://some.exampledomain.com#some-hash');
    expect(this.getBaseUrl()).toEqual('http://some.exampledomain.com/');
  });

  it('should get base URL with trailing / when there is search', function () {
    this.$locationMock.absUrl.and.returnValue('http://some.exampledomain.com?key=value');
    expect(this.getBaseUrl()).toEqual('http://some.exampledomain.com/');
  });

  it('should get base URL with trailing / when there is search and hash', function () {
    this.$locationMock.absUrl.and.returnValue('http://some.exampledomain.com?key=value#other-hash');
    expect(this.getBaseUrl()).toEqual('http://some.exampledomain.com/');
  });

});