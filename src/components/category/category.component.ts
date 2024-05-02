import { Component, Input } from '@angular/core';
import { Category, CategoryService } from '../../services/category.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  @Input()
  category: Category = {
    id: -1,
    label: 'undefined',
    color: "#FF0000"
  }

  constructor(protected categoryService: CategoryService){}

  handleRemoveCategory(categoryId: number|undefined){
    if (categoryId){
      this.categoryService.removeCategory(categoryId);
    }
  }
}
