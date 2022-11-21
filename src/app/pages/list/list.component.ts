import { Component, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/services/api-call.service';
import { Router, NavigationEnd } from '@angular/router';
import { characterRM } from 'src/app/models/characterRM-interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public characters: characterRM[] = [];
  filter: string;
  
  public characterForm ! : FormGroup;
  

  constructor(private apiCallService: ApiCallService, private router : Router,  private formBuilder: FormBuilder,) {
    this.filter = "";
  }

  ngOnInit(): void {
   this.subscribeCharacter()

    // this.characterForm = this.formBuilder.group({
    //   characterName: [

    //   ]
    // })
  }

  private subscribeCharacter(): void{
    if(this.router.url === "/list") {
      this.apiCallService.getCharacters().subscribe((data: any) => {
        this.characters = data.results
        
      })
    }
   
  }

 

  public onSubmit() {}

 

}
