import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient.service';


export interface RecipeIngredient {
  ingredient: Ingredient,
  quantity: number,
}

export interface Recipe {
  id: number;
  name: string;
  ingredients: RecipeIngredient[];
  rating: number | null;
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private nextId: number = 1;

  private recipes: Recipe[] = [
  //   {
  //     id: 0,
  //     name: 'pate forestiere',
  //     ingredients: [
  //       {
  //         ingredient: {id: 1, label: 'noodles'},
  //         quantity: 50
  //       },
  //       {
  //         ingredient: {id: 2, label: 'mushrooms'},
  //         quantity: 30
  //       }],
  // rating: 5}
  ];

  constructor() { }

  getAllRecipes() {
    return this.recipes;
  }

  removePot(id: number){
    this.recipes = this.recipes.filter(recipe => recipe.id != id)
    // this.httpClient.delete("/api/lights/" + id).subscribe(() => {
    //   this.refreshLights();
    // })
  }

  addRecipe(name: string, ingredients: RecipeIngredient[]){
    let recipe: Recipe = {
      id: this.nextId++,
      name: name,
      ingredients: ingredients,
      rating: null,
    }
    this.recipes.push(recipe)
  }


}
