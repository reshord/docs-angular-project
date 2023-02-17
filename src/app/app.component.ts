import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { listItemsService } from '../assets/services/listItems.service';
import { IListItems } from '../assets/types/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [listItemsService],
})
export class AppComponent implements OnInit {
  listItems: IListItems[] = [];
  constructor(private listItemsService: listItemsService) {}

  getListItems(type: string) {
    if(type === 'firstHalf') {
      this.listItems = this.listItemsService.getListItems().slice(0,3)
      return this.listItems
    }
    else if(type === 'secondHalf') {
      this.listItems = this.listItemsService.getListItems().slice(3,this.listItemsService.getListItems().length)
      return this.listItems
    }
    return []
  }

  ngOnInit(): void {
  }
}
