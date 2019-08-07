import { Injectable } from '@angular/core';
import { GroceryItem } from '../model/grocery.model';
import { of, Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class GroceryListService {
  
  private groceryItems: Array<GroceryItem> = [];

  constructor() {

    // these are some exmples of grocery items
      this.groceryItems.push(
        {id: uuid(), name: 'Tomato', optionalNote: '2 Kg'},
        {id: uuid(), name: 'Orange', optionalNote: '1 kg'},
        {id: uuid(), name: 'Onion', optionalNote: '2 kg'},
        {id: uuid(), name: 'apple', optionalNote: '2 Kg'}
        );
  }

  getGroceryList(): Observable<GroceryItem[]> {
    return of(this.groceryItems);
  }
// add the object which contains (unique ID, name, and optional notes) to the groceryItems array. 
  addItem(item: GroceryItem) {
    const gitem = {id: uuid(), name: item.name, optionalNote: item.optionalNote};
    this.groceryItems.push(gitem);
    console.log(this.groceryItems);
  }

  // removes the item from list
  remove(id: any) {
        this.groceryItems.splice(this.groceryItems.findIndex(item => item.id === id), 1);
  }

}
