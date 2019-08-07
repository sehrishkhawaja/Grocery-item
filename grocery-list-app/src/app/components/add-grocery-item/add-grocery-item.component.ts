import { Component } from '@angular/core';
import { GroceryListService } from 'src/app/service/grocery-list.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GroceryItem } from 'src/app/model/grocery.model';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-grocery-item',
  templateUrl: './add-grocery-item.component.html' 
})
export class AddGroceryItemComponent {
  groceryItemForm: FormGroup;

  constructor(private groceryListService: GroceryListService) {
    this.groceryItemForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      optionalNote: new FormControl(''),
    });
  }

  // adding Unique id, grocery name and optional notes into the grocery list 
  onSubmit() {
    if (this.groceryItemForm.valid) {
      const item = new GroceryItem(uuid(), this.name.value, this.optionalNote.value);
      this.groceryListService.addItem(item);
    }
  }

  //get grocery item name
  get name() {
    return this.groceryItemForm.get('name');
  }
  
 // get optional notes
  get optionalNote() {
    return this.groceryItemForm.get('optionalNote');
  }

}
