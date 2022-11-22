import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../models/characterRM-interface'
import { LibraryService } from 'src/app/services/api-library/library.service';

@Component({
  selector: 'app-show-mixing',
  templateUrl: './show-mixing.component.html',
  styleUrls: ['./show-mixing.component.scss']
})
export class ShowMixingComponent implements OnInit {

  public books$?: Observable<Book[]>;
  constructor(private libraryService: LibraryService) { }
  

  ngOnInit(): void {
    this.books$ = this.libraryService.getBooksWithAuthors();
  }

}
