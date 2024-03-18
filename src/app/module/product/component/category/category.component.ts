import { Component, OnInit } from '@angular/core';
import { Category } from '../../_model/category';
import { CategoryService } from '../../_service/category.service';
import { NgForm } from '@angular/forms';

import $ from 'jquery';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  newCategory: Category = { category_id: '', acronym: '', category: '', status: '' };
  confirmationMessage: string = '';

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categories = this.categoryService.getCategories();
  }

  toggleTheme() {
    const element = document.body;
    element.dataset['bsTheme'] = element.dataset['bsTheme'] === 'dark' ? 'light' : 'dark';
  }

  createCategory(): void {
    if (this.newCategory.acronym && this.newCategory.category) {
      this.categories.push(this.newCategory);
      this.newCategory = { category_id: '', acronym: '', category: '', status: '' }; // Limpiar los campos del formulario
      this.confirmationMessage = 'Categoría creada exitosamente.';

    }
  }
}

