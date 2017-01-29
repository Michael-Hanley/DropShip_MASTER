import { Injectable } from '@angular/core';

@Injectable()
export class SearchBarService {
  searchTerm;
  constructor() { }

  onSearch(searchTerm) {
    this.searchTerm = searchTerm;
    console.log(this.searchTerm);
  }

  getSearch() {
    console.log(this.searchTerm);
    return this.searchTerm;
  }

}
