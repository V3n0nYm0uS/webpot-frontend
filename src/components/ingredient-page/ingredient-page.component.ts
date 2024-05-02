import { Component } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';
import { IngredientFormComponent } from '../ingredient-form/ingredient-form.component';
import { NgFor, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IngredientComponent } from '../ingredient/ingredient.component';
import { CategoryService } from '../../services/category.service';
import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-ingredient-page',
  standalone: true,
  imports: [IngredientFormComponent, IngredientComponent,
            CategoryComponent, NgFor, NgStyle, FormsModule],
  templateUrl: './ingredient-page.component.html',
  styleUrl: './ingredient-page.component.css'
})
export class IngredientPageComponent {

  constructor(protected ingredientService: IngredientService, protected categoryService: CategoryService){}

  form = false;
  category_select: string = "-1";

  getIngredientsById(){
    const category_selected = parseInt(this.category_select) 
    if (category_selected < 0){
      return this.ingredientService.getAllIngredients();
    }
    return this.ingredientService.getIngredientsByCategoryId(category_selected)
  }

  showForm(){
    this.form = !this.form;
  }
}
