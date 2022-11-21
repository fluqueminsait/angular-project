import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  constructor(private http: HttpClient) { }
  public urlOfCharacter = '';
  public getCharacters(){
    return this.http.get('https://rickandmortyapi.com/api/character')
  }

  public urlCharacter (url: any){
    this.urlOfCharacter = url.url; 
  }

  public getSingleCharacter() {
    return this.http.get(this.urlOfCharacter)
  }
}
