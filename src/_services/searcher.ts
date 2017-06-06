import {Book} from './Book';

class Searcher {

  private static notContain(text: string, query: string): boolean {
    return text.indexOf(query) === -1;
  }

  public search(books: Book[], query: string): Book[] {

    const queryComponents: string[] = query.match(/\S+/g).map((queryComponent) => queryComponent.toLowerCase());

    return books.filter((book: Book) => {

      let result: boolean = false;
      const nameLowerCase: string = book.name.toLowerCase();
      const titleLowerCase: string = book.title.toLowerCase();

      queryComponents.forEach((queryComponent) => {
        if (
          Searcher.notContain(nameLowerCase, queryComponent) &&
          Searcher.notContain(titleLowerCase, queryComponent)
        ) {
          return;
        }
        result = true;
      });

      return result;

    });

  }

}

export const searcher = [Searcher];
