import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsComponent } from './products.component';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../shared/shared.module';
import { CreateComponent } from './create/create.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'detail/:id',
        component: ProductDetailComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    ProductsComponent,
    ListComponent,
    CreateComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    NgOptimizedImage
  ]
})
export class ProductsModule { }
