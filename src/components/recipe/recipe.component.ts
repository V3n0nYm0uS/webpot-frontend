import { Component, Input } from '@angular/core';
import { Recipe, RecipeService } from '../../services/recipe.service';
import { NgFor, NgStyle } from '@angular/common';
import { PotService } from '../../services/pot.service';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [NgFor, NgStyle],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {

  @Input()
  recipe: Recipe = {
    id: 0,
    name: "",
    recipeIngredients: [],
    rating: null,
  };


  constructor(protected recipeService: RecipeService){
  }

  handleRemoveRecipe(id: number | undefined){
    if(id){
      this.recipeService.removeRecipe(id);
    }
  }


}
