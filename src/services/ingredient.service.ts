import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Ingredient {
  id: number,
  label: string
}

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private ingredientArray: Ingredient[] = this.getAllIngredients();

  // private nextId: number = 3;

  constructor(private httpClient: HttpClient) {
    this.refreshIngredients();
   }

  refreshIngredients() {
    this.httpClient.get("http://localhost:8081/ingredient").subscribe((ingredients: any) => {
      this.ingredientArray = ingredients;
    })
  }

  getAllIngredients(): any[] {
    return this.ingredientArray
  }

  getIngredientByName(label: string){
    return this.ingredientArray.filter(ingredient => ingredient.label == label)[0];
  }

  addIngredient(label: string){
    let ingredient = {
      // id: this.nextId++,
      label: label,
    }
    
    this.httpClient.post("http://localhost:8081/ingredient", ingredient).subscribe(() => {
      this.refreshIngredients();
    })
  }

  removeIngredient(id: number){
    this.ingredientArray = this.ingredientArray.filter(ingredient => ingredient.id != id)
    this.httpClient.delete('http://localhost:8081/ingredient/' + id).subscribe(() => {
      this.refreshIngredients();
    })
  }




}
