import { Component } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';
import { IngredientFormComponent } from '../ingredient-form/ingredient-form.component';
import { NgFor, NgStyle } from '@angular/common';
import { IngredientComponent } from '../ingredient/ingredient.component';

@Component({
  selector: 'app-ingredient-page',
  standalone: true,
  imports: [IngredientFormComponent, IngredientComponent, NgFor, NgStyle],
  templateUrl: './ingredient-page.component.html',
  styleUrl: './ingredient-page.component.css'
})
export class IngredientPageComponent {

  constructor(protected ingredientService: IngredientService){}

  form = false;

  showForm(){
    this.form = !this.form;
  }
}
