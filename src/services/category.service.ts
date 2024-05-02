import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Category {
  id: number | undefined,
  label: string,
  color: string,
}


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoriesArray: Category[] = this.getAllCategories();

  constructor(private httpClient: HttpClient) {
    this.refreshCategories();
  }

  refreshCategories() {
    this.httpClient.get("http://localhost:8081/category").subscribe((categories: any) => {
      this.categoriesArray = categories;
    })
  }

  getAllCategories(): any[] {
    return this.categoriesArray;
  }

  getCategoryByName(label: string){
    return this.categoriesArray.filter(category => category.label == label)[0];
  }

  getCategoryById(id: number){
    return this.categoriesArray.filter(category => category.id == id)[0];
  }

  addCategory(label: string, color: string){
    let category = {
      label: label,
      color: color,
    }

    this.httpClient.post("http://localhost:8081/category", category).subscribe(() => {
      this.refreshCategories();
    })
  }

  removeCategory(id: number){
    this.httpClient.delete('http://localhost:8081/category/' + id).subscribe(() => {
      this.refreshCategories();
      this.categoriesArray = this.categoriesArray.filter(category => category.id != id)
    })
  }
}
