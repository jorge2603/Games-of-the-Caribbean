import { Component, OnInit } from '@angular/core';
import { Category } from '../../_model/category' // Importa el modelo de Category
import { CategoryService } from '../../_service/category.service'; // Importa el servicio de CategoryService

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'] // Cambiado de styleUrl a styleUrls
})
export class CategoryComponent implements OnInit {


  categories: Category[] = []; // Variable para almacenar las categorías

  constructor(private categoryService: CategoryService) { } // Inyecta el servicio CategoryService

  ngOnInit(): void {
    this.getCategories(); // Llama a la función getCategories al inicializar el componente
  }

  // Función para obtener categorías
  getCategories(): void {
    this.categories = this.categoryService.getCategories(); // Llama a la función getCategories del servicio y asigna el resultado a la variable categories
  }

  toggleTheme() {
    const element = document.body;
    element.dataset['bsTheme'] = element.dataset['bsTheme'] === 'dark' ? 'light' : 'dark';
  }


}
