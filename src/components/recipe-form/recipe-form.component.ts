import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgStyle } from '@angular/common';
import { IngredientService, Ingredient } from '../../services/ingredient.service';
import { RecipeService, RecipeIngredient } from '../../services/recipe.service';


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
    name: 'Undefined',
    ingredients: <any>[],
    rating: 0
  }
  ingredients: RecipeIngredient[] = [  ];

  ingredient: Ingredient = {
    label: '',
    id: 0,
  }
  handleCloseForm(){
    this.closeForm.emit()
  }

  addRecipe(name: string, ingredients: RecipeIngredient[]): void {
    this.recipeService.addRecipe(name, ingredients)
    this.ingredients = []
    this.handleCloseForm();
  }

  addIngredient(label: string){
    this.ingredients.push({ingredient: this.ingredientService.getIngredientByName(label), quantity: 0});
    this.recipe.ingredients = this.ingredients
  }

  removeIngredient(id: number){
    this.ingredients = this.ingredients.filter(ingredient => ingredient.ingredient.id != id);
    this.recipe.ingredients = this.ingredients
  }
}
