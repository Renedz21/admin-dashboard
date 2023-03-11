import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { TableComponent } from './table/table.component';
import { NgOptimizedImage } from '@angular/common';


@NgModule({
  declarations: [
    TitleComponent,
    TableComponent
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
