import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PotService } from '../../services/pot.service';


@Component({
  selector: 'app-pot',
  standalone: true,
imports: [CardModule, ButtonModule, NgStyle, FormsModule],
  templateUrl: './pot.component.html',
  styleUrl: './pot.component.css'
})
export class PotComponent {

  constructor(private potService: PotService){}

  @Input()
  pot: any = {
    label: "UNKNOWN",
    color: "#FF0000",
    progress: 100,
  }
  
  @Output("trigger")
  trigger: EventEmitter<any> = new EventEmitter<any>();

  handleTrigger(){
    this.trigger.emit();
  }

  handleChangeWeight(e: any){
    this.potService.changeWeight(this.pot.id, e)
    console.log(this.pot.weight)
  }

  getProgress(): number {
    return Math.trunc(100 / this.pot.max * this.pot.weight)
  }
}
