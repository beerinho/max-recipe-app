import { Injectable } from "@angular/core";

import { ShoppingListService } from "./../shopping-list/shopping-list.service";
import { Recipe } from "./../../../models/recipe.model";
import { Ingredient } from "src/models/ingredient.model";
import { Subject } from "rxjs";
import { Router } from "@angular/router";

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

  constructor(private slService: ShoppingListService, private router: Router) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    recipe.id = this.recipes.length;
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
    return this.router.navigate(["/recipes", recipe.id]);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
    return;
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index);
    this.recipesChanged.next(this.recipes.slice());
    return this.router.navigate(["/"]);
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
