import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class SearchBarService {
  private searchTermSource = new Subject<string>();
  searchTerm$ = this.searchTermSource.asObservable();
  data;
  constructor(private http: Http) { }

  onSearch(term) {
    this.searchTermSource.next(term);
  }
}
