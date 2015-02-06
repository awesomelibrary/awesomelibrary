'use strict';

describe('service librarySerializer', function() {

  var librarySerializer;
  var $window;
  var json;
  var Library;
  var Book;
  var Rental;

  beforeEach(function() {

    angular.mock.module('humanLibrary');

    angular.mock.inject(function(_$window_, _librarySerializer_, _Library_, _Book_, _Rental_) {
      $window = _$window_;
      librarySerializer = _librarySerializer_;
      Library = _Library_;
      Book = _Book_;
      Rental = _Rental_;
    });

    json = 'some json string';
    spyOn($window.angular, 'toJson');
    spyOn($window.angular, 'fromJson');

  });

  it('when serializing library should convert it to json', function() {
    var library = {};
    $window.angular.toJson.and.returnValue(json);
    expect(librarySerializer.serialize(library)).toBe(json);
    expect($window.angular.toJson).toHaveBeenCalledWith(library);
  });

  describe('when deserializing library', function() {

    var strippedLibrary;
    var library;

    function deserializeLibrary() {
      $window.angular.fromJson.and.returnValue(strippedLibrary);
      library = librarySerializer.deserialize(json);
    }

    it('should parse json', function() {
      strippedLibrary = {};
      deserializeLibrary();
      expect($window.angular.fromJson).toHaveBeenCalledWith(json);
    });

    it('should create library model', function() {
      strippedLibrary = {
        books: []
      };
      deserializeLibrary();
      expect(library).toEqual(jasmine.any(Library));
      expect(library).toEqual(jasmine.objectContaining(strippedLibrary));
    });

    it('should create book model', function() {
      strippedLibrary = {
        books: [{
          name: 'a',
          rentals: []
        }]
      };
      deserializeLibrary();
      expect(library.books[0]).toEqual(jasmine.any(Book));
      expect(library.books[0]).toEqual(strippedLibrary.books[0]);
    });

    it('should create rental model', function() {
      strippedLibrary = {
        books: [{
          name: 'a',
          rentals: [{
            period: 1
          }]
        }]
      };
      deserializeLibrary();
      expect(library.books[0].rentals[0]).toEqual(jasmine.any(Rental));
      expect(library.books[0].rentals[0]).toEqual(strippedLibrary.books[0].rentals[0]);
    });

  });

});
