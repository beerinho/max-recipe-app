import { Component, OnInit } from "@angular/core";

import { ShoppingListService } from "./../../services/shopping-list/shopping-list.service";
import { Ingredient } from "./../../../models/ingredient.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.scss"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
  }
}
