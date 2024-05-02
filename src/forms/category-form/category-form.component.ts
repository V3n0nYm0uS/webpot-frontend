import { Component, EventEmitter } from '@angular/core';
import { Category, CategoryService } from '../../services/category.service';
import { FormsModule } from '@angular/forms';
import { Output } from '@angular/core';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css'
})
export class CategoryFormComponent {

  @Output("closeForm")
  closeForm: EventEmitter<any> = new EventEmitter<any>();

  constructor(protected categoryService: CategoryService){}

  category: Category = {
    id: undefined,
    label: "",
    color: ""
  }

  handleAddCategory(category: Category){

    this.categoryService.addCategory(category.label, category.color);
    this.handleCloseForm()
  }

  handleCloseForm(){
    this.closeForm.emit()
  }

}
