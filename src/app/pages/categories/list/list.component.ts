import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  headers: string[] = ['Nombre de categoría', 'Descripción', 'Actions'];
  data: any[][] = [];

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(): void {
    this.categoryService.getAll().subscribe({
      next: (categories) => {
        this.data = categories.map(category => {
          return [
            category.name,
            category.description,
            // category.id
          ]
        });
      }
    })
  }


}
