import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

import { ShoppingListService } from "./../../services/shopping-list/shopping-list.service";
import { Ingredient } from "./../../../models/ingredient.model";

@Component({
  selector: "app-shopping-list-edit",
  templateUrl: "./shopping-list-edit.component.html",
  styleUrls: ["./shopping-list-edit.component.scss"]
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild("f", { static: false }) slForm: NgForm;
  subscription: Subscription;
  isEditMode: boolean = false;
  editItemIndex: number;
  editedItem: Ingredient;

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.isEditMode = true;
        this.editItemIndex = index;
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  ngOnDestroy() {
    return this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.isEditMode) {
      this.slService.updateIngredient(this.editItemIndex, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
    return this.onClear();
  }

  onDeleteItem() {
    this.slService.deleteIngredient(this.editItemIndex);
    return this.onClear();
  }

  onClear() {
    this.slForm.reset();
    return (this.isEditMode = false);
  }
}
