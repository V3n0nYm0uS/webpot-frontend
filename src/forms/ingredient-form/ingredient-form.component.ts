import { Component, Output, EventEmitter } from '@angular/core';
import { Ingredient, IngredientService } from '../../services/ingredient.service';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-ingredient-form',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './ingredient-form.component.html',
  styleUrl: './ingredient-form.component.css'
})
export class IngredientFormComponent {

  @Output("closeForm")
  closeForm: EventEmitter<any> = new EventEmitter<any>();

  constructor(protected ingredientService: IngredientService, protected categoryService: CategoryService){}

  ingredient: any = {
    id: undefined,
    label: "",
    categoryId: -1,
  };

  handleAddIngredient(ingredient: any){
    let category = this.categoryService.getCategoryById(ingredient.categoryId)
    this.ingredientService.addIngredient(ingredient.label, category);
    this.handleCloseForm()
  }

  handleCloseForm(){
    this.closeForm.emit()
  }
}
