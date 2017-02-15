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
    this.items = this.searchBarService.searchTerm$;
  }

  ngOnInit() {
  }

}
