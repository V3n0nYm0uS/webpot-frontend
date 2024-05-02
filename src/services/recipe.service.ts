import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient.service';
import { HttpClient } from '@angular/common/http';


export interface RecipeIngredient {
  ingredient: Ingredient,
  quantity: number,
}

export interface Recipe {
  id: number | undefined;
  name: string;
  recipeIngredients: RecipeIngredient[];
  rating: number | null;
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipesArray: Recipe[] = [];

  constructor(private httpClient: HttpClient) {
    this.refreshRecipes();
  }

  refreshRecipes(){
    this.httpClient.get("http://localhost:8081/recipe").subscribe((recipes: any) =>{  
    this.recipesArray = recipes
    })
  }

  getAllRecipes(): Recipe[] {
    return this.recipesArray;
  }

  getRecipeByName(name: string){
    return this.recipesArray.filter(recipe => recipe.name == name)[0];
  }

  getRecipeById(id: number){
    return this.recipesArray.filter(recipe => recipe.id == id)[0];
  }

  addRecipe(name: string, recipeIngredients:RecipeIngredient[], rating: number | null = null){
    let recipe = {
      name: name,
      recipeIngredients: recipeIngredients,
      rating: rating,
    }

    this.httpClient.post("http://localhost:8081/recipe", recipe).subscribe(() => {
      this.refreshRecipes();
    })


  }

  removeRecipe(id: number){
    this.httpClient.delete("http://localhost:8081/recipe/" + id).subscribe(() => {
      this.refreshRecipes();
    })
  }


}
