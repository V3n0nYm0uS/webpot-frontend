import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Ingredient, IngredientService } from '../../services/ingredient.service';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-ingredient',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './ingredient.component.html',
  styleUrl: './ingredient.component.css'
})
export class IngredientComponent {

  @Input()
  ingredient: Ingredient = {
   id: -1,
   label: 'undefined',
   category: null
  }

  constructor(protected ingredientService: IngredientService){}
  
  handleRemoveIngredient(id: number|undefined){
    if(id){
      this.ingredientService.removeIngredient(id)
    }
  }


}
