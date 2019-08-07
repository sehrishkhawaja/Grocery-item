import { Component } from '@angular/core';
import { GroceryListService } from './service/grocery-list.service';
import { GroceryItem } from './model/grocery.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grocery-list-app';
  list$: Observable<GroceryItem[]>;

  constructor(private groceryListService: GroceryListService) {
    this.list$ = groceryListService.getGroceryList();
  }

  // expand and collapse for showing and hiding the optional notes
  expandCollapse($event) {
    let element = $event.target || $event.srcElement || $event.currentTarget;
    element = element.classList.contains('expand-collapse') ? element : element.closest('.expand-collapse');
    if (element.classList.contains('expanded')) {
      element.classList.remove('expanded');
      element.classList.add('collapsed');
    } else {
      element.classList.remove('collapsed');
      element.classList.add('expanded');
    }
  }
  // alert box to confirm before removing the item
   confirm(id) {
    if (confirm('Are you sure!')) {
    this.removeItem(id);
 }
}
// remove grocery item from the list
  removeItem(id) {
    this.groceryListService.remove(id);
  }
}
