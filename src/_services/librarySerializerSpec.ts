import angular from 'angular';
import { humanLibraryModule } from '../';

describe('service librarySerializer', function() {

  var librarySerializer;
  var json;
  var Library;
  var Book;
  var Rental;

  beforeEach(function() {

    angular.mock.module(humanLibraryModule);

    angular.mock.inject(function(_librarySerializer_, _Library_, _Book_, _Rental_) {
      librarySerializer = _librarySerializer_;
      Library = _Library_;
      Book = _Book_;
      Rental = _Rental_;
    });

    json = 'some json string';
    spyOn(angular, 'toJson');
    spyOn(angular, 'fromJson');

  });

  it('when serializing library should convert it to json', function() {
    var library = {};
    angular.toJson.and.returnValue(json);
    expect(librarySerializer.serialize(library)).toBe(json);
    expect(angular.toJson).toHaveBeenCalledWith(library);
  });

  describe('when deserializing library in format version v1.0.0', function() {

    beforeEach(function() {

      this.strippedLibrary = {
        formatVersion: 'v1.0.0',
        books: [{
          name: 'a',
          rentals: []
        }]
      };

      angular.fromJson.and.returnValue(this.strippedLibrary);
      this.library = librarySerializer.deserialize('');

    });

    it('should have version 2.0.0', function() {
      expect(this.library.formatVersion).toEqual('2.0.0');
    });

    it('human book should be available', function() {
      expect(this.library.books[0].available).toBe(true);
    });

  });

  describe('when deserializing library in format version 2.0.0', function() {

    beforeEach(function() {

      this.startDate = new Date();
      this.startDate.setFullYear(this.startDate.getFullYear() + 1);

      this.strippedLibrary = {
        formatVersion: '2.0.0',
        startDate: this.startDate.toISOString(),
        books: [{
          name: 'a',
          available: false,
          rentals: [{
            rentedAt: this.startDate.getTime(),
            returnedAt: this.startDate.getTime(),
            period: 1
          }]
        }]
      };

      angular.fromJson.and.returnValue(this.strippedLibrary);
      this.library = librarySerializer.deserialize('');

    });

    it('should parse json', function() {
      expect(angular.fromJson).toHaveBeenCalledWith('');
    });

    it('should have version 2.0.0', function() {
      expect(this.library.formatVersion).toEqual('2.0.0');
    });

    it('should parse start date', function() {
      expect(this.library.startDate).toEqual(this.startDate);
    });

    it('should create library model', function() {
      expect(this.library).toEqual(jasmine.any(Library));
    });

    it('should create book model', function() {
      expect(this.library.books[0]).toEqual(jasmine.any(Book));
      expect(this.library.books[0].name).toEqual(this.strippedLibrary.books[0].name);
    });

    it('should create rental model', function() {
      expect(this.library.books[0].rentals[0]).toEqual(jasmine.any(Rental));
      expect(this.library.books[0].rentals[0].period).toEqual(this.strippedLibrary.books[0].rentals[0].period);
    });

    it('should have rentedAt date', function() {
      expect(this.library.books[0].rentals[0].rentedAt).toEqual(this.startDate.getTime());
    });

    it('should have returnedAt date', function() {
      expect(this.library.books[0].rentals[0].returnedAt).toEqual(this.startDate.getTime());
    });

    it('human book should not be available', function() {
      expect(this.library.books[0].available).toBe(this.strippedLibrary.books[0].available);
    });

  });

});
