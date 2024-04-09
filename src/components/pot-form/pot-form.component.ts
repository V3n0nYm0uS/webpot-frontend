import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PotService } from '../../services/pot.service';
import { IngredientService } from '../../services/ingredient.service';
import { NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-pot-form',
  standalone: true,
  imports: [FormsModule, NgStyle, NgFor],
  templateUrl: './pot-form.component.html',
  styleUrl: './pot-form.component.css'
})
export class PotFormComponent {

  @Output("closeForm")
  closeForm: EventEmitter<any> = new EventEmitter<any>();

  constructor(protected potService: PotService, protected ingredientService: IngredientService){}

  
  pot: any = {
    color: '#FFFF00',
    ingredient: {},
    mode: {},
  };


  handleCloseForm(){
    this.closeForm.emit()
  }

  addPot(ingredient: any, color: string, max: number, mode: any){
    this.potService.addPot(ingredient, color, max, mode)
    this.handleCloseForm()
  }
}
