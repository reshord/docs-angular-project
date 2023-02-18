import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { listItemsService } from '../services/listItems.service';
import { IListItems } from '../assets/types/types';
import { themeService } from 'src/services/theme.service';
import { NgForm } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Store } from '@ngrx/store';
import { themeChangerSelector } from 'src/store/theme.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [listItemsService, themeService, Store],
})
export class AppComponent {
    darkTheme: boolean = true;
  
    constructor(
      private listItemsService: listItemsService,
      private store: Store
    ) {
      this.store.select(themeChangerSelector).subscribe(theme => this.darkTheme = theme.darkTheme)
    }

    listItems: IListItems[] = [];
    // currentTheme: boolean = this.themeService.currentTheme

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
