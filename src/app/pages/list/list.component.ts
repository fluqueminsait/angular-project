import { Component, OnInit} from '@angular/core';
import { ApiCallService } from 'src/app/services/api-call.service';
import { Router} from '@angular/router';
import { characterRM } from 'src/app/models/characterRM-interface';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public characters: characterRM[] = [];
  public filter: string;
  public page: number;
  public numberPage: number;

  constructor(private apiCallService: ApiCallService, private router : Router) {
    this.filter = "";
    this.page = 1;
    this.numberPage = 0;
  }

  ngOnInit(): void {
    this.getAllCharacters()
  }

  public getAllCharacters(){
    for(let i = 1 ; i <= 40; i++){
      this.page = i;
      this.apiCallService.getAllCharactersRM(this.page).subscribe((data:any) => {
        data.results.map((character: any) => {
          this.characters = [...this.characters, character]
        })
      })
    }
  }
  public nextPage() {
    this.numberPage += 20;
    console.log(this.numberPage)
  }

  public prevPage() {
    if(this.numberPage > 1){
      this.numberPage -= 20;
    }
}
}
