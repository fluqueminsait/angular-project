import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/services/api-call.service';
import { myListOfCharacters } from 'src/app/models/characterRM-interface';

@Component({
  selector: 'app-my-characters',
  templateUrl: './my-characters.component.html',
  styleUrls: ['./my-characters.component.scss']
})
export class MyCharactersComponent implements OnInit {
  public myCharacters: myListOfCharacters[] = []
  filter: string;
  constructor(private apiCallService: ApiCallService, private router: Router) {   this.filter = "";}

  ngOnInit(): void {
    this.subscribeMyListOfCharacters()   
  }

  private subscribeMyListOfCharacters(): void {
    if(this.router.url === '/my-characters') {
      this.apiCallService.getMyListOfCharacters().subscribe((data:any) => {
        this.myCharacters = data
      })
    }
  }

  public editCharacter(myCharacter: object){
    this.apiCallService.editCharacter(myCharacter)
    this.router.navigate(['/crud']);
    }

}
