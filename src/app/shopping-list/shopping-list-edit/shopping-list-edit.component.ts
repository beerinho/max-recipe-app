import { ShoppingListService } from "./../../services/shopping-list/shopping-list.service";
import { Ingredient } from "./../../../models/ingredient.model";
import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-shopping-list-edit",
  templateUrl: "./shopping-list-edit.component.html",
  styleUrls: ["./shopping-list-edit.component.scss"]
})
export class ShoppingListEditComponent {
  @ViewChild("nameInput", { static: false }) nameInputRef: ElementRef;
  @ViewChild("amountInput", { static: false }) amountInputRef: ElementRef;

  constructor(private slService: ShoppingListService) {}

  onAdditem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIngredient);
  }

  onDeleteItem() {}

  onClearList() {}
}
