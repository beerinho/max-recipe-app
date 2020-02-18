import { Component, OnInit } from "@angular/core";
import { RecipeService } from "./../../services/recipe/recipe.service";
import { Recipe } from "./../../../models/recipe.model";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.scss"],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.recipeSelectedEvent.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}
