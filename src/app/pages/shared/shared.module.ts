import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { TableComponent } from './table/table.component';
import { NgOptimizedImage } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';


@NgModule({
  declarations: [
    TitleComponent,
    TableComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  exports: [
    TitleComponent,
    TableComponent
  ]
})
export class SharedModule { }
