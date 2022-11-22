import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  constructor(private http: HttpClient) { }
  public urlOfCharacter = '';
  public edition: boolean = false;
  public myCharacterData = {
    id: "",
    characterNameForm: "",
    characterImageForm: "",
  }

  public clearForm(){
    this.myCharacterData = {
      id: "",
      characterNameForm: "",
      characterImageForm: "",
    }
  }

  public getCharacters(){
    return this.http.get('https://rickandmortyapi.com/api/character')
  }

  public urlCharacter (url: any){
    this.urlOfCharacter = url.url; 
  }

  public getSingleCharacter() {
    return this.http.get(this.urlOfCharacter)
  }

  public getMyListOfCharacters():Observable<any> {
    return this.http.get('http://localhost:3000/newCharacters')
  }

  public postNewCharacter(myNewCharacter: any, ){
    return this.http.post("http://localhost:3000/newCharacters", myNewCharacter)
  }

  public editCharacter(myCharacter: any) {
    this.myCharacterData = myCharacter;
    this.edition = true;
  }

  public patchMyCharacter(id: any, newCharacter: any) {
    return this.http.patch('http://localhost:3000/newCharacters/' + id, newCharacter);
  }

  public deleteCharacter(id: any){
    return this.http.delete('http://localhost:3000/newCharacters/' + id);
  }

  public getAllCharactersRM(page: any):Observable<any>{
    return this.http.get(`https://rickandmortyapi.com/api/character?page=${page}`)
  }
 
  
}
