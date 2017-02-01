import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class SearchBarService {
  //set the variable to be the source string
  private searchTermSource = new Subject<string>();
  //set your stream variable to watch for changes to the source
  searchTerm$ = this.searchTermSource.asObservable();
  data;
  constructor(private http: Http) { }

  onSearch(term) {
    //push change to source
    this.searchTermSource.next(term);
  }
}
