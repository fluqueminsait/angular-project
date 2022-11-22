import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiAuthor, ApiBook } from '../../models/characterRM-interface';

const BASE_URL = 'https://630e5e12109c16b9abfa16aa.mockapi.io';

@Injectable({
  providedIn: 'root'
})
export class ApiLibraryService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getApiBooks(): Observable<ApiBook[]> {
    return this.httpClient.get<ApiBook[]>(`${BASE_URL}/books`);
  }

  public getApiAuthors(): Observable<ApiAuthor[]>  {
    return this.httpClient.get<ApiAuthor[]>(`${BASE_URL}/authors`);
  }
}