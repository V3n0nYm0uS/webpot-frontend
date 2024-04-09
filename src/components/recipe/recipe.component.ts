import { Component, Input } from '@angular/core';
import { Recipe } from '../../services/recipe.service';
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
  nbPerson: number = 1;

  @Input()
  recipe: Recipe = {
    id: 0,
    name: "",
    ingredients: [],
    rating: null,
  };

  constructor(protected potService: PotService){
  }

  isAvailable(){
    let available = true;
    // this.recipe.ingredients.forEach( )
    return true;
  }


}
