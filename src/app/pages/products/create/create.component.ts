import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Product } from 'src/app/models/classes/product.class';
import { Category } from 'src/app/models/interfaces/category.interface';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  formGroup!: FormGroup;

  url: string = '';

  categories: Category[] = [];

  product: Product = new Product();

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private productService: ProductService,
    private storage: AngularFireStorage,
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.getCategories();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      name: [''],
      description: [''],
      price: [''],
      stock: [''],
      image: [''],
      categoryId: [''],
    })
  }

  async uploadFile(event: any) {
    const file = event.target.files[0];
    const filePath = file.name;
    await this.storage.upload(filePath, file).then(() => {
      this.storage.ref(filePath).getDownloadURL().subscribe((url) => {
        this.url = url;
      })
    })
  }

  getCategories(): void {
    this.spinner.show();
    this.categoryService.getAll().subscribe({
      next: (categories) => {
        this.categories = categories;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.spinner.hide();
      }
    })
  }

  save() {
    this.spinner.show();
    this.product.name = this.formGroup.value.name;
    this.product.description = this.formGroup.value.description;
    this.product.price = this.formGroup.value.price;
    this.product.stock = this.formGroup.value.stock;
    this.product.categoryId = this.formGroup.value.categoryId;
    this.product.image = this.url;

    this.productService.create(this.product).subscribe({
      next: (product) => {
        this.router.navigate(['/products']);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.spinner.hide();
      }
    })
  }



}
