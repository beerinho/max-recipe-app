import { Recipe } from "./../../../models/recipe.model";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  recipeSelectedEvent = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "A test recipe",
      "This is a test",
      "https://realfood.tesco.com/media/images/Veggie-rice-bowl-1400x919-mini-ba621247-21ff-419b-9604-3a27a255b90b-0-1400x919.jpg"
    )
  ];

  constructor() {}

  getRecipes() {
    return this.recipes.slice();
  }
}
