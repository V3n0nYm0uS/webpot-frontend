import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient.service';

export interface Pot{
  id: number;
  ingredient: Ingredient;
  color: string;
  max: number;
  weight: number;
  mode: any;
}

@Injectable({
  providedIn: 'root'
})
export class PotService {

  private nextId: number = 3;

  private inventory: Pot[] = [
    {id: 1,
      ingredient: {id:0, label:"pistachio"},
      color: "#FF0000",
      max: 200,
      weight: 100,
      mode: {name: "auto"}},
    {id: 2,
      ingredient: {id: 1, label:"noodles"},
      color: "#FF00FF",
      max: 500,
      weight: 150,
      mode: {name: "manual"}}];
  
  private mode_options: any[] = [
    {name: 'manual'},
    {name: 'auto'}
  ]

  constructor() {}

  get_mode_options(): any[] {
    return this.mode_options
  }

  getAllPots(): any[] {
    return this.inventory;
  }

  changeWeight(id: number, newWeight: number): void {
    this.inventory.filter(pot => pot.id === id)[0].weight = newWeight;
  }

  removePot(id: number){
    this.inventory = this.inventory.filter(pot => pot.id != id)
    // this.httpClient.delete("/api/lights/" + id).subscribe(() => {
    //   this.refreshLights();
    // })
  }

  addPot(ingredient: Ingredient, color: string, max: number, mode: any){
    let pot = {
      id: this.nextId++,
      ingredient: ingredient,
      color: color,
      max: max,
      weight: 0,
      mode: mode
    }
    this.inventory.push(pot);
  }

}
