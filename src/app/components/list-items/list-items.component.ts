import { OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { listItemsService } from 'src/services/listItems.service';
import { IListItems } from 'src/assets/types/types';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css'],
})
export class ListItemsComponent {
  @Input() listItems: IListItems[] = []
  constructor(private listItemsService: listItemsService) {}

  // ngOnInit(): void {
  //   if(this.type === 'firstHalf') this.listItems = this.listItemsService.getListItems()
  // }
}
