import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../../../models/characterRM-interface'

@Component({
  selector: 'app-mixing-card',
  templateUrl: './mixing-card.component.html',
  styleUrls: ['./mixing-card.component.scss']
})
export class MixingCardComponent implements OnInit {

  @Input() public book?: Book;
  constructor() { }

  ngOnInit(): void {
  }

}
