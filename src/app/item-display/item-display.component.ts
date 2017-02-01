import { Component, OnInit } from '@angular/core';
import {SearchBarService} from '../search-bar.service';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.css']
})
export class ItemDisplayComponent implements OnInit {
  items;
  constructor(private searchBarService: SearchBarService) {
    //subscribing to the search term
    searchBarService.searchTerm$.subscribe(
      //function fires whent he term changes
      searchResults => {
        this.items = searchResults;
      });
  }



  ngOnInit() {

  }

}
