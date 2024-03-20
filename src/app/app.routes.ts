import { Routes } from '@angular/router';
import { InventoryPageComponent } from '../components//inventory-page/inventory-page.component';
import { RecipePageComponent } from '../components/recipe-page/recipe-page.component';
import { HomePageComponent } from '../components/home-page/home-page.component';

export const routes: Routes = [
    {path: "home", component: HomePageComponent},
    {path: "inventory", component: InventoryPageComponent},
    {path: "recipe", component: RecipePageComponent},
    {path: "**", redirectTo: "home"},
];
