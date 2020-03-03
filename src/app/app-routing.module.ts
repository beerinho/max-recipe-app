import { RecipeEditComponent } from "./recipe-book/recipe-edit/recipe-edit.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecipeDetailComponent } from "./recipe-book/recipe-detail/recipe-detail.component";
import { RecipesComponent } from "./recipe-book/recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list/shopping-list.component";
import { RecipeStartComponent } from "./recipe-book/recipe-start/recipe-start.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/recipes" },
  {
    path: "recipes",
    component: RecipesComponent,
    children: [
      { path: "", component: RecipeStartComponent },
      { path: "new", component: RecipeEditComponent },
      { path: ":recipe_id", component: RecipeDetailComponent },
      { path: ":recipe_id/edit", component: RecipeEditComponent }
    ]
  },
  { path: "shopping-list", component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
