import { RecipeService } from "./../../services/recipe/recipe.service";
import { Recipe } from "./../../../models/recipe.model";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.scss"]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}

  onSelect() {
    this.recipeService.recipeSelectedEvent.emit(this.recipe);
  }
}
