import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { RecipeService } from "./../../services/recipe/recipe.service";
import { Ingredient } from "src/models/ingredient.model";
import { Recipe } from "./../../../models/recipe.model";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.scss"]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let id = 0;
    this.route.params.subscribe((params: Params) => {
      id = +params["recipe_id"];
    });
    this.recipe = this.recipeService.getRecipe(id);
  }

  onAddToSL(ingredients: Ingredient[]) {
    this.recipeService.addToShoppingList(ingredients);
  }

  onDeleteRecipe(index: number) {
    this.recipeService.deleteRecipe(index);
  }
}
