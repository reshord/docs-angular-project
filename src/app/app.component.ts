import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { listItemsService } from '../services/listItems.service';
import { IListItems } from '../assets/types/types';
import { NgForm } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Store } from '@ngrx/store';
import { themeChangerSelector } from 'src/store/theme.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
})
export class AppComponent {
  darkTheme: boolean = false

  constructor(
    private store: Store
  ) {
    this.store.select(themeChangerSelector).subscribe(theme => this.darkTheme = theme.darkTheme)
  }
  
}
