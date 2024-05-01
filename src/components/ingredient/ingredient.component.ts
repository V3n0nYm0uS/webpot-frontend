import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Ingredient } from '../../services/ingredient.service';
import { IngredientService } from '../../services/ingredient.service';

@Component({
  selector: 'app-ingredient',
  standalone: true,
  imports: [],
  templateUrl: './ingredient.component.html',
  styleUrl: './ingredient.component.css'
})
export class IngredientComponent {

  @Input()
  ingredient: Ingredient = {
   id: -1,
   label: 'undefined'
  }

  constructor(protected ingredientService: IngredientService){}
  

}
