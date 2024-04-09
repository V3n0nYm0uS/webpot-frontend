import { Component, Output, EventEmitter } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ingredient-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ingredient-form.component.html',
  styleUrl: './ingredient-form.component.css'
})
export class IngredientFormComponent {

  @Output("closeForm")
  closeForm: EventEmitter<any> = new EventEmitter<any>();

  constructor(protected ingredientService: IngredientService){}

  ingredient: any = {

  };

  handleAddIngredient(ingredient: any){
    this.ingredientService.addIngredient(ingredient);
    this.closeForm.emit()
  }

  handleCloseForm(){
    this.closeForm.emit()
  }
}
