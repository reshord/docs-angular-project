import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IListItems } from 'src/assets/types/types';
import { listItemsService } from 'src/services/listItems.service';
import { themeChangerSelector } from 'src/store/theme.selector';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [listItemsService, Store]
})
export class HomePageComponent {
  darkTheme: boolean = true;
  
  constructor(
    private listItemsService: listItemsService,
    private store: Store
  ) {
    this.store.select(themeChangerSelector).subscribe(theme => this.darkTheme = theme.darkTheme)
  }

  listItems: IListItems[] = [];

  getListItems(type: string) {
    if (type === 'firstHalf') {
        this.listItems = this.listItemsService.getListItems().slice(0, 3);
        return this.listItems;
    } else if (type === 'secondHalf') {
        this.listItems = this.listItemsService
          .getListItems()
          .slice(3, this.listItemsService.getListItems().length);
        return this.listItems;
    }
  return [];
}
}
