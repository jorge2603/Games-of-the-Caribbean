import { Injectable } from '@angular/core';
import { Category } from '../_model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[] = [];

  constructor() { }

  // Función para obtener categorías
  getCategories(): Category[] {
    // Declara y retorna un arreglo de categorías
      this.categories=[];
      this.categories.push(new Category('1', 'CSGO2', 'RPG', 'disponible'));
      this.categories.push(new Category('2', 'LOL', 'MOBA', 'disponible'));
      this.categories.push(new Category('3', 'Fort', 'Battle Royale', 'sin stock'));
      // Agrega más categorías según sea necesario
    

    return this.categories;
  }
}
