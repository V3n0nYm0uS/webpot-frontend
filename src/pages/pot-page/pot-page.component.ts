import { NgFor, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PotComponent } from '../../components/pot/pot.component';
import { FormsModule } from '@angular/forms';
import { PotService } from '../../services/pot.service';
import { Ingredient, IngredientService } from '../../services/ingredient.service';
import { PotFormComponent } from '../../forms/pot-form/pot-form.component';


@Component({
  selector: 'app-pot-page',
  standalone: true,
  imports: [NgFor, PotComponent, FormsModule, NgStyle, PotFormComponent],
  templateUrl: './pot-page.component.html',
  styleUrl: './pot-page.component.css'
})
export class PotPageComponent {

  constructor(protected potService: PotService, protected ingredientService: IngredientService){}

  ingredient: any = {
    label: ""
  };

  pot = {
    color: '#FFFF00',
    ingredient: { id: 0,
      label: "pistachio"},
    max: 200,
    mode: {name: "manual"}
  };

  form = false;

  handleTrigger(id: number){
    this.potService.removePot(id);
  }

  handleWeight(id: number, newWeight: number){
    this.potService.changeWeight(id, newWeight);
  }

  changeWeight(e: any){
    console.log(e)
  }


  showForm(){
    this.form = !this.form;
  }
  
}
