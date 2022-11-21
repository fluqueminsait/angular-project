import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { characterRM } from 'src/app/models/characterRM-interface';
import { ApiCallService } from 'src/app/services/api-call.service';
import { AppRoutingModule } from './../../app-routing.module';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() characterValue: characterRM = {};
  constructor(private apiCallService: ApiCallService, private router: Router) { }

  ngOnInit(): void {
    this.subscribeSingleCharacter()
  }

  private subscribeSingleCharacter(): void {
    if(this.router.url === '/detail'){
      this.apiCallService.getSingleCharacter().subscribe((data:any) => {
        this.characterValue = data;
      })
    }

  }

}
