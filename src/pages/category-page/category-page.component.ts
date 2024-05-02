import { Component } from '@angular/core';
import { CategoryComponent } from '../../components/category/category.component';
import { NgFor, NgStyle } from '@angular/common';
import { CategoryService } from '../../services/category.service';
import { CategoryFormComponent } from '../../forms/category-form/category-form.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [CategoryComponent, NgFor, NgStyle, CategoryFormComponent],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css'
})
export class CategoryPageComponent {

  constructor(protected categoryService: CategoryService){}

  form = false;

  showForm(){
    this.form = !this.form;
  }

}
