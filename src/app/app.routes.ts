import { Routes } from '@angular/router';
import { RecipePageComponent } from '../pages/recipe-page/recipe-page.component';
import { IngredientPageComponent } from '../pages/ingredient-page/ingredient-page.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { PotPageComponent } from '../pages/pot-page/pot-page.component';
import { CategoryPageComponent } from '../pages/category-page/category-page.component';

export const routes: Routes = [
    {path: "home", component: HomePageComponent},
    // {path: "inventory", component: PotPageComponent},
    {path: "categories", component: CategoryPageComponent},
    {path: "ingredients", component: IngredientPageComponent},
    {path: "recipes", component: RecipePageComponent},
    {path: "**", redirectTo: "home"},
];
