import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './category.service';

export interface Ingredient {
  id: number | undefined,
  label: string,
  category: Category | null
}

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private ingredientArray: Ingredient[] = this.getAllIngredients();

  constructor(private httpClient: HttpClient) {
    this.refreshIngredients();
   }

  refreshIngredients() {
    this.httpClient.get("http://localhost:8081/ingredient").subscribe((ingredients: any) => {
      this.ingredientArray = ingredients;
    })
  }

  getAllIngredients(): Ingredient[] {
    return this.ingredientArray
  }

  getIngredientByName(label: string){
    return this.ingredientArray.filter(ingredient => ingredient.label == label)[0];
  }

  getIngredientById(id: number){
    return this.ingredientArray.filter(ingredient => ingredient.id == id)[0];
  }

  getIngredientsByCategoryId(categoryId: number){
    return this.ingredientArray.filter(ingredient => ingredient.category?.id == categoryId);
  }

  addIngredient(label: string, category: Category | null = null){
    let ingredient = {
      label: label,
      category: category
    }
    console.log(ingredient)
    
    this.httpClient.post("http://localhost:8081/ingredient", ingredient).subscribe(() => {
      this.refreshIngredients();
    })
  }

  removeIngredient(id: number){
    this.httpClient.delete('http://localhost:8081/ingredient/' + id).subscribe(() => {
      this.refreshIngredients();
    })
  }




}
