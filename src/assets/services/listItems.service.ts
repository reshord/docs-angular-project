import listItems from '../../list-items.json';
import { IListItems } from '../types/types';

export class listItemsService {
  private listItems: IListItems[] = listItems;

  getListItems() {
    return this.listItems;
  }
}
