import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './component/category/category.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ProductModule { }
