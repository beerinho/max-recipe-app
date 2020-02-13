import { Recipe } from "./../../../models/recipe.model";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.scss"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A test recipe",
      "This is a test",
      "https://realfood.tesco.com/media/images/Veggie-rice-bowl-1400x919-mini-ba621247-21ff-419b-9604-3a27a255b90b-0-1400x919.jpg"
    )
  ];
  @Output() passRecipeEvent = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit() {}

  onPassRecipe(recipe: Recipe) {
    this.passRecipeEvent.emit(recipe);
  }
}
