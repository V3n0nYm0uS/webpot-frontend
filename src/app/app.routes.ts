import { Routes } from '@angular/router';
import { RecipePageComponent } from '../components/recipe-page/recipe-page.component';
import { IngredientPageComponent } from '../components/ingredient-page/ingredient-page.component';
import { HomePageComponent } from '../components/home-page/home-page.component';
import { PotPageComponent } from '../components/pot-page/pot-page.component';
import { CategoryPageComponent } from '../components/category-page/category-page.component';

export const routes: Routes = [
    {path: "home", component: HomePageComponent},
    // {path: "inventory", component: PotPageComponent},
    {path: "categories", component: CategoryPageComponent},
    {path: "ingredients", component: IngredientPageComponent},
    {path: "recipes", component: RecipePageComponent},
    {path: "**", redirectTo: "home"},
];
