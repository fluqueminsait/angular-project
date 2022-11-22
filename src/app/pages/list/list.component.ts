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
  filter: string;
  public page: any;
  constructor(private apiCallService: ApiCallService, private router : Router,) {
    this.filter = "";
 
  }

  ngOnInit(): void {
    this.subscribeCharacter()
  }

  private subscribeCharacter(): void{
    if(this.router.url === "/list") {
      this.apiCallService.getCharacters().subscribe((data: any) => {
        this.characters = data.results
      })
    }
   
  }

  public onSubmit() {
   
  }
}
