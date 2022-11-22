import { Injectable } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { ApiAuthor, ApiBook, Author, Book } from '../../models/characterRM-interface';
import { ApiLibraryService } from './api-library.service';


@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private apiLibraryService: ApiLibraryService) { }

  /**
   * Obtiene en paralelo los libros y autores para luego juntarlos en un modelo final transformado.
   * 
   * @returns Libros transformados con info de sus autores.
   */
  public getBooksWithAuthors(): Observable<Book[]> {
    return combineLatest([
      this.apiLibraryService.getApiBooks(),
      this.apiLibraryService.getApiAuthors()
    ]).pipe(
      map(([books, authors]) => {
        return books.map(book => {
          // Buscamos el autor del libro en los autores recibidos de la API.
          const bookAuthor = authors.find(author => author.name === book.author);
          // Si existe el autor lo transformamos
          const transformedAuthor = bookAuthor ? this.transformAuthor(bookAuthor) : undefined;
          // Trasformamos también el libro.
          return this.transformBook(book, transformedAuthor);
        });
      })
    )
  }

  /**
   * Transforma un autor proveniente de la api en el modelo transformado.
   *
   * @param apiAuthor Autor recogido de la api
   * @returns Autor transformado y con campos necesarios.
   */
  private transformAuthor(apiAuthor: ApiAuthor): Author {
    return {
      id: apiAuthor.id,
      name: apiAuthor.name,
      numberBooks: apiAuthor.numberBooks,
      birthDate: apiAuthor.birthDate,
      image: apiAuthor.image
    };
  }

  /**
   * Transforma un libro proveniente de la api en el modelo transformado.
   *
   * @param apiBook Libro recogido de la api.
   * @param apiAuthor Autor del libro transformado.
   * @returns Libro transformado y con campos necesarios.
   */
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