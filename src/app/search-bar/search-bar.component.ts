import { Component, OnInit } from '@angular/core';
import {SearchBarService} from '../search-bar.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
searchInput: string;
  constructor(private searchBarService: SearchBarService) { }

  onSearch() {
    this.searchBarService.onSearch(this.searchInput);
  }

  ngOnInit() {
  }

}
