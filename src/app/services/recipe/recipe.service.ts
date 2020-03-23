import { Injectable } from "@angular/core";

import { ShoppingListService } from "./../shopping-list/shopping-list.service";
import { Recipe } from "./../../../models/recipe.model";
import { Ingredient } from "src/models/ingredient.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      0,
      "A test recipe",
      "This is a test",
      "https://realfood.tesco.com/media/images/Veggie-rice-bowl-1400x919-mini-ba621247-21ff-419b-9604-3a27a255b90b-0-1400x919.jpg",
      [new Ingredient("Banana", 1), new Ingredient("shoe", 0.5)]
    )
  ];

  recipesChanged = new Subject<Recipe[]>();

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    return this.recipesChanged.next(this.recipes.slice());
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
