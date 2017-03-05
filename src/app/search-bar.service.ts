import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';

@Injectable()
export class SearchBarService {
  private searchTermSource = new Subject<string>();
  searchTerm;
  searchTerm$ = this.searchTermSource.asObservable();
  url;
  constructor(private router: Router, private http: Http) { }

  onSearch(searchTerm) {
    this.searchTermSource.next(searchTerm);
  }
  showItemPage() {
    this.router.navigate(['']);
  }

  getSearch() {
    console.log(this.searchTerm);
    return this.searchTerm;
  }
  getData(term): Observable<any[]> {
      this.url = 'http://localhost:3000/api/product';
      return this.http.get(this.url).map(res => res.json());
    }
}
