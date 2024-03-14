import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './module/product/component/category/category.component'; // Importa el componente

const routes: Routes = [
  // Otras rutas
  { path: 'category', component: CategoryComponent }, // Agrega la ruta "categoria" al componente "CategoryComponent"
  // Otras rutas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
