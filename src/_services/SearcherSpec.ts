import angular from 'angular';
import {humanLibraryModule} from '../';

describe('service searcher', () => {

  beforeEach(function() {
    angular.mock.module(humanLibraryModule);
    angular.mock.inject((searcher, Book) => {
      this.searcher = searcher;
      this.Book = Book;
    });
    this.books = [
      new this.Book(),
      new this.Book()
    ];
    this.books[0].name = 'Alfred';
    this.books[0].title = 'Kind old man';
    this.books[1].name = 'Gregory';
    this.books[1].title = 'Bad man';
  });

  it('should NOT find Alfred when searching John', function() {
    expect(this.searcher.search(this.books, 'John')).toEqual([]);
  });

  it('should NOT find Alfred when searching John Tom', function() {
    expect(this.searcher.search(this.books, 'John Tom')).toEqual([]);
  });

  it('should NOT find Alfred when searching John  Tom', function() {
    expect(this.searcher.search(this.books, 'John  Tom')).toEqual([]);
  });

  it('should NOT find Alfred when searching John\tTom', function() {
    expect(this.searcher.search(this.books, 'John\tTom')).toEqual([]);
  });

  it('should NOT find Alfred when searching John\t\tTom', function() {
    expect(this.searcher.search(this.books, 'John\t\tTom')).toEqual([]);
  });

  it('should NOT find Alfred when searching John\nTom', function() {
    expect(this.searcher.search(this.books, 'John\nTom')).toEqual([]);
  });

  it('should NOT find Alfred when searching John\n\nTom', function() {
    expect(this.searcher.search(this.books, 'John\n\nTom')).toEqual([]);
  });

  it('should find Alfred when searching Alfred', function() {
    expect(this.searcher.search(this.books, 'Alfred')).toEqual([this.books[0]]);
  });

  it('should find Alfred when searching Alfre', function() {
    expect(this.searcher.search(this.books, 'Alfre')).toEqual([this.books[0]]);
  });

  it('should find Alfred when searching alfred', function() {
    expect(this.searcher.search(this.books, 'alfred')).toEqual([this.books[0]]);
  });

  it('should find Alfred when searching alfre john', function() {
    expect(this.searcher.search(this.books, 'alfre john')).toEqual([this.books[0]]);
  });

  it('should find Alfred when searching alfre  john', function() {
    expect(this.searcher.search(this.books, 'alfre  john')).toEqual([this.books[0]]);
  });

  it('should find Alfred when searching alfre\tjohn', function() {
    expect(this.searcher.search(this.books, 'alfre\tjohn')).toEqual([this.books[0]]);
  });

  it('should find Alfred when searching alfre\t\tjohn', function() {
    expect(this.searcher.search(this.books, 'alfre\t\tjohn')).toEqual([this.books[0]]);
  });

  it('should find Alfred when searching alfre\njohn', function() {
    expect(this.searcher.search(this.books, 'alfre\njohn')).toEqual([this.books[0]]);
  });

  it('should find Alfred when searching alfre\n\njohn', function() {
    expect(this.searcher.search(this.books, 'alfre\n\njohn')).toEqual([this.books[0]]);
  });

  it('should find Alfred when searching kind old', function() {
    expect(this.searcher.search(this.books, 'kind old')).toEqual([this.books[0]]);
  });

  it('should find Alfred when searching old kind', function() {
    expect(this.searcher.search(this.books, 'old kind')).toEqual([this.books[0]]);
  });

  it('should find Alfred and Gregory when searching man', function() {
    expect(this.searcher.search(this.books, 'man')).toEqual(this.books);
  });

});
