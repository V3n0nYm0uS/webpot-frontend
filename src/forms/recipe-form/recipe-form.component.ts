import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgStyle } from '@angular/common';
import { IngredientService, Ingredient } from '../../services/ingredient.service';
import { RecipeService, RecipeIngredient, Recipe } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-form',
  standalone: true,
  imports: [FormsModule, NgFor, NgStyle],
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.css'
})
export class RecipeFormComponent {

  @Output("closeForm")
  closeForm: EventEmitter<any> = new EventEmitter<any>();

  constructor(protected recipeService: RecipeService, protected ingredientService: IngredientService){}

  recipe: any = {
    name: "",
    recipeIngredients: [],
    rating: 0
  }
  ingredients: RecipeIngredient[] = [  ];

  ingredient_select: number = -1;

  handleCloseForm(){
    this.closeForm.emit()
  }

  handleAddRecipe(recipe: Recipe, ingredients: RecipeIngredient[]): void {
    this.recipeService.addRecipe(recipe.name, ingredients)
    this.ingredients = []
    this.handleCloseForm();
  }

  addIngredient(ingredientId: number){
    if(ingredientId < 0){
      console.log("NOTHING SELECTED");
    }
    else {
      // Vérifier si l'ingrédient existe déjà dans le tableau
      const existingIngredient = this.ingredients.find(item => item.ingredient.id === ingredientId);
      if(existingIngredient) {
          console.log("Ingredient already exists");
          // Vous pouvez choisir de ne pas ajouter l'ingrédient s'il existe déjà
          // ou mettre à jour la quantité, etc.
      } else {
          // L'ingrédient n'existe pas encore dans le tableau, vous pouvez l'ajouter
          this.ingredients.push({ingredient: this.ingredientService.getIngredientById(ingredientId), quantity: 1});
          this.recipe.ingredients = this.ingredients;
      }
    }
  }

  handleRemoveIngredient(id: number){
    this.ingredientService.removeIngredient(id)
  }

  
}
