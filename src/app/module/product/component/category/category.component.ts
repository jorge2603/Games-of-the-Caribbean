import { Component, OnInit } from '@angular/core';
import { Category } from '../../_model/category';
import { CategoryService } from '../../_service/category.service';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from'sweetalert2';

declare var $: any; // JQuery

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories: Category[] = [];
  form=this.formBuilder.group({
    acronym:['',Validators.required],
    category:['',Validators.required],
  });

  submitted=false;
  constructor(private categoryService: CategoryService,private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    console.log("carga de categorias on init");
    this.getCategories();
  }

  getCategories(): void {
    console.log("carga de categorias");
    this.categories = this.categoryService.getCategories();
  }

  toggleTheme() {
    console.log("cambio de tema");
    const element = document.body;
    element.dataset['bsTheme'] = element.dataset['bsTheme'] === 'dark' ? 'light' : 'dark';
  }

  onSubmit(): void {
    console.log("formulario");
    this.submitted=true;
    if(this.form.invalid){
      return;
    }
    this.submitted=false;
    let categoryid=this.categories.length+1;
    let category=new Category(categoryid.toString(),this.form.controls['acronym'].value!,this.form.controls['category'].value!,"disponible");
    this.categories.push(category);

    this.hidemodal();

    Swal.fire({
      position: 'top-end',

      icon: 'success',

      toast: true,

      text: 'El producto se registró correctamente.',

      background: '#E8F8F8',

      showConfirmButton: false,

      timer: 2000

    });


  }

  showModal(): void {
    console.log("mostrar modal");
    $('#categoryModal').modal('show');
    this.form.reset();
    this.submitted=false;
}
  hidemodal(): void {
    console.log("ocultar modal");
    $('#categoryModal').modal('hide');
  }
}
