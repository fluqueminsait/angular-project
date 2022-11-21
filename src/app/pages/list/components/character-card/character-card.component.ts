import { Component, Input, OnInit } from '@angular/core';
import { characterRM } from 'src/app/models/characterRM-interface';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/services/api-call.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {

  @Input() characterValue: characterRM = {};
  constructor( private apiCallService: ApiCallService, private router: Router) { }

  ngOnInit(): void {
  }

  public navigateToDetail(characterValue: characterRM){
    this.apiCallService.urlCharacter(characterValue)
    this.router.navigate(["/detail"])
  }
}
