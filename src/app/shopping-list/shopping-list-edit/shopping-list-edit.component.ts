import { Component, OnInit, OnDestroy } from "@angular/core";
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
  subscription: Subscription;
  isEditMode: boolean = false;
  editItemIndex: number;

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.isEditMode = true;
        this.editItemIndex = index;
      }
    );
  }

  ngOnDestroy() {
    return this.subscription.unsubscribe();
  }

  onAdditem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.slService.addIngredient(newIngredient);
    return form.reset();
  }

  onDeleteItem() {}

  onClearList() {}
}
