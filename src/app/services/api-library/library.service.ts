import { Injectable } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { ApiAuthor, ApiBook, Author, Book } from '../../models/characterRM-interface';
import { ApiLibraryService } from './api-library.service';


@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private apiLibraryService: ApiLibraryService) { }

  public getBooksWithAuthors(): Observable<Book[]> {
    return combineLatest([
      this.apiLibraryService.getApiBooks(),
      this.apiLibraryService.getApiAuthors()
    ]).pipe(
      map(([books, authors]) => {
        return books.map(book => {
          const bookAuthor = authors.find(author => author.name === book.author);
          const transformedAuthor = bookAuthor ? this.transformAuthor(bookAuthor) : undefined;
          return this.transformBook(book, transformedAuthor);
        });
      })
    )
  }

  private transformAuthor(apiAuthor: ApiAuthor): Author {
    return {
      id: apiAuthor.id,
      name: apiAuthor.name,
      numberBooks: apiAuthor.numberBooks,
      birthDate: apiAuthor.birthDate,
      image: apiAuthor.image
    };
  }

  private transformBook(apiBook: ApiBook, author?: Author): Book {
    return {
      id: apiBook.id,
      title: apiBook.title,
      image: apiBook.image,
      published: apiBook.published,
      isbn: apiBook.isbn,
      author
    };
  }
}