import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { IProduct } from 'src/app/models/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: IProduct[] = [];

  constructor(
    private productService: ProductService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.spinner.show();
    this.productService.getAllProducts().subscribe({
      next: (products) => {
        console.log(products);
        this.products = products;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.spinner.hide();
      }
    });
  }



}
