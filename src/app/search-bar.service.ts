import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import { Router } from '@angular/router';

@Injectable()
export class SearchBarService {
  private searchTermSource = new Subject<string>();
  searchTerm;
  searchTerm$ = this.searchTermSource.asObservable();

  constructor(private router: Router) { }

  onSearch(searchTerm) {
    this.showItemPage();
    this.searchTermSource.next(searchTerm);
    console.log(this.searchTerm);
  }
  showItemPage() {
    this.router.navigate(['']);
  }

  getSearch() {
    console.log(this.searchTerm);
    return this.searchTerm;
  }

}
