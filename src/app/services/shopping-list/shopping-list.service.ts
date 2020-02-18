import { Injectable } from "@angular/core";
import { Ingredient } from "src/models/ingredient.model";

@Injectable({
  providedIn: "root"
})
export class ShoppingListService {
  ingredients: Ingredient[] = [new Ingredient("Apples", 5)];

  constructor() {}

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  getIngredients() {
    return this.ingredients.slice();
  }
}
