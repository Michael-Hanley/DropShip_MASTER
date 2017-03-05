import { Component, OnInit } from '@angular/core';
import {SearchBarService} from '../search-bar.service';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.css']
})
export class ItemDisplayComponent implements OnInit {
  items;
  term;
  constructor(private searchBarService: SearchBarService) {
    this.searchBarService.getData(this.term)
      .subscribe(res => this.items = res);
      console.log(this.items);
  }

  ngOnInit() {
  }

}
