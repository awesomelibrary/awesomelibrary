'use strict';

var angular = require('angular');
require('angular-mocks');

describe("service libraryLocalStorage", function() {

  var Library;
  var libraryLocalStorage;
  var Rental;
  var Book;
  var $windowMock;
  var librarySerializerMock;

  beforeEach(function() {

    $windowMock = jasmine.createSpyObj('$window', ['localStorage']);
    $windowMock.angular = angular;
    $windowMock.localStorage = {};

    librarySerializerMock = jasmine.createSpyObj('librarySerializer', ['serialize', 'deserialize']);

    angular.mock.module(require('../'), function($provide) {
      $provide.value('$window', $windowMock);
      $provide.value('librarySerializer', librarySerializerMock);
    });

    angular.mock.inject(function($injector) {
      Library = $injector.get('Library');
      Book = $injector.get('Book');
      Rental = $injector.get('Rental');
      libraryLocalStorage = $injector.get('libraryLocalStorage');
    });

  });

  describe('when storage is unavailable', function() {

    it('and loading should throw Local storage not available expection', function() {
      expect(libraryLocalStorage.load).toThrow(new Error('Local storage not available'));
    });

    it('and saving should throw Local storage not available expection', function() {
      expect(libraryLocalStorage.save).toThrow(new Error('Local storage not available'));
    });

  });

  describe('when storage is available', function() {

    beforeEach(function() {
      $windowMock.Storage = {};
    });

    it("should save library to local storage", function() {
      var library = {};
      var serializedLibrary = '{}';
      librarySerializerMock.serialize.and.returnValue(serializedLibrary);
      libraryLocalStorage.save(library);
      expect(librarySerializerMock.serialize).toHaveBeenCalledWith(library);
      expect($windowMock.localStorage.humanLibrary).toBe(serializedLibrary);
    });

    it("and humanLibrary is in localStorage should load library from local storage", function() {
      var library = {};
      $windowMock.localStorage.humanLibrary = '{}';
      librarySerializerMock.deserialize.and.returnValue(library);
      expect(libraryLocalStorage.load()).toBe(library);
      expect(librarySerializerMock.deserialize).toHaveBeenCalledWith($windowMock.localStorage.humanLibrary);
    });

    it("and humanLibrary is NOT in localStorage load should return undefined", function() {
      expect(libraryLocalStorage.load()).toBeUndefined();
      expect(librarySerializerMock.deserialize).not.toHaveBeenCalled();
    });

  });

});
