import { Component } from '@angular/core';
import { RecipeComponent } from '../../components/recipe/recipe.component';
import { RecipeFormComponent } from '../../forms/recipe-form/recipe-form.component';
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

  constructor (protected recipeService: RecipeService) {}

  form = false;

  showForm(){
    this.form = !this.form;
  }
}
