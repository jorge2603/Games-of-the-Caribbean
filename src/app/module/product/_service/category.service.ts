import { Injectable } from '@angular/core';
import { Category } from '../_model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  // Función para obtener categorías
  getCategories(): Category[] {
    // Declara y retorna un arreglo de categorías
    const categories: Category[] = [
      new Category(1, 'CSGO2', 'RPG', 'disponible'),
      new Category(2, 'LOL', 'MOBA', 'disponible'),
      new Category(3, 'Fort', 'Battle Royale', 'sin stock'),
      // Agrega más categorías según sea necesario
    ];

    return categories;
  }
}
