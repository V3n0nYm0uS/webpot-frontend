import { Injectable } from '@angular/core';

export interface Ingredient {
  id: number,
  label: string
}

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private ingredients: any[] = [
    { id: 0,
      label: "pistachio"},
    {id: 1,
      label: "noodles"},
    {id: 2, label: 'mushrooms'}
  ];

  private nextId: number = 3;

  constructor() { }

  getAllIngredients(): any[] {
    return this.ingredients
  }

  getIngredientByName(label: string){
    return this.ingredients.filter(ingredient => ingredient.label == label)[0];
  }

  addIngredient(label: string){
    let ingredient = {
      id: this.nextId++,
      label: label,
    }
    if(this.ingredients.filter(ingredient => ingredient.label == label).length == 0){
      this.ingredients.push(ingredient);
    }
  }




}
