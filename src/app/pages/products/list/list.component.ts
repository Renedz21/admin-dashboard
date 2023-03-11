import { AfterContentChecked, AfterViewChecked, Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { IProduct } from 'src/app/models/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  headers: string[] = ['Nombre', 'Categoria', 'Descripcion', 'Precio', 'Stock', 'Imagen', 'Acciones']
  data: any[][] = [];


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
        this.data = products.map(product => {
          return [
            product.name,
            product.category.name,
            product.description,
            product.price,
            product.stock,
            product.image,
            // product.status,
          ]
        })
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
