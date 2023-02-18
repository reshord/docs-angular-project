import listItems from '../list-items.json';
import { IListItems } from '../assets/types/types';

export class listItemsService {
  private listItems: IListItems[] = listItems;

  getListItems() {
    return this.listItems;
  }
}
