import { AfterContentChecked, AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input() headers!: string[];
  @Input() data!: any[][];
  @Input() actions!: any[];

  @Input() columnaTitulo!: number;
  @Input() columnaAdmin!: number;
  @Input() description!: number;
  @Input() itemsPerPage!: number;

  executeAction(action: Function, row: any[]) {
    action(row);
  }

  currentPage: number = 1;

  getTotalPages(): number {
    return Math.ceil(this.data.length / this.itemsPerPage);
  }

  get currentPageItems(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    return this.data.slice(startIndex, endIndex);
  }

  // get showPagination(): boolean {
  //   return this.totalPages > 1;
  // }

  setPage(page: number) {
    this.currentPage = page;
  }

}
