import { Component } from '@angular/core';
import { RecipeComponent } from '../recipe/recipe.component';
import { RecipeFormComponent } from '../recipe-form/recipe-form.component';
import { RecipeService, Recipe, RecipeIngredient } from '../../services/recipe.service';
import { IngredientService, Ingredient } from '../../services/ingredient.service';
import { NgFor, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-recipe-page',
  standalone: true,
  imports: [NgFor, RecipeComponent, FormsModule, RecipeFormComponent, NgStyle],
  templateUrl: './recipe-page.component.html',
  styleUrl: './recipe-page.component.css'
})
export class RecipePageComponent {

  constructor (protected recipeService: RecipeService, protected ingredientService: IngredientService) {}

  nbPerson: number = 1;

  form = false;


  


  changeNbPerson(e: any){
    this.nbPerson = e;
  }

  showForm(){
    this.form = !this.form;
  }
}
